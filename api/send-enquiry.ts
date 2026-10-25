/**
 * Vercel Serverless Function — /api/send-enquiry
 *
 * Receives enquiry form data → validates → sends email via Resend.
 *
 * Required env vars (set in Vercel project settings, NOT prefixed with VITE_):
 *   RESEND_API_KEY      — from resend.com
 *   ENQUIRY_FROM_EMAIL  — verified sender, e.g. noreply@tasknexio.com
 *   ENQUIRY_TO_EMAIL    — recipient, defaults to contact@valenlabs.in
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

/* ─── Rate limiting (in-memory, per cold start) ───────────────────── */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT   = 5;          // max requests
const WINDOW_MS    = 60 * 1000;  // per 60 seconds per IP

function isRateLimited(ip: string): boolean {
  const now    = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count += 1;
  return false;
}

/* ─── Validation ──────────────────────────────────────────────────── */
interface Payload {
  name:        string;
  email:       string;
  company?:    string;
  projectType: string;
  budget?:     string;
  description: string;
  honeypot?:   string; // must be empty
}

function validatePayload(body: unknown): { ok: true; data: Payload } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') return { ok: false, error: 'Invalid request body.' };

  const b = body as Record<string, unknown>;

  // Honeypot — bots fill this in
  if (b.honeypot && String(b.honeypot).trim()) return { ok: false, error: 'Bot detected.' };

  const name        = String(b.name        ?? '').trim();
  const email       = String(b.email       ?? '').trim();
  const company     = String(b.company     ?? '').trim();
  const projectType = String(b.projectType ?? '').trim();
  const budget      = String(b.budget      ?? '').trim();
  const description = String(b.description ?? '').trim();

  if (!name)                                         return { ok: false, error: 'Name is required.'             };
  if (name.length > 120)                             return { ok: false, error: 'Name is too long.'             };
  if (!email)                                        return { ok: false, error: 'Email is required.'            };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))    return { ok: false, error: 'Email format is invalid.'      };
  if (email.length > 254)                            return { ok: false, error: 'Email is too long.'            };
  if (!projectType)                                  return { ok: false, error: 'Project type is required.'     };
  if (!description)                                  return { ok: false, error: 'Description is required.'      };
  if (description.length < 20)                       return { ok: false, error: 'Description is too short.'     };
  if (description.length > 5000)                     return { ok: false, error: 'Description is too long.'      };

  return { ok: true, data: { name, email, company, projectType, budget, description } };
}

/* ─── Email template ──────────────────────────────────────────────── */
function buildHtml(d: Payload, timestamp: string): string {
  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:8px 12px;font-weight:600;color:#525252;width:140px;vertical-align:top;white-space:nowrap;">${label}</td>
           <td style="padding:8px 12px;color:#171717;">${value.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
         </tr>`
      : '';

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F6F3EC;font-family:'Inter',system-ui,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F3EC;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#171717;padding:24px 32px;">
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <span style="display:inline-block;font-size:20px;font-weight:700;color:#FFFFFF;letter-spacing:-0.5px;">Task</span>
                <span style="display:inline-block;font-size:20px;font-weight:700;color:#6B86FF;letter-spacing:-0.5px;">Nexio</span>
              </td>
              <td style="padding-left:12px;">
                <span style="font-size:11px;color:rgba(255,255,255,0.4);letter-spacing:2px;text-transform:uppercase;">Project Enquiry</span>
              </td>
            </tr>
          </table>
          <!-- Chartreuse accent line -->
          <div style="height:3px;background:linear-gradient(90deg,#294FFF,#D6FF66);border-radius:9999px;margin-top:14px;"></div>
        </td></tr>

        <!-- Body -->
        <tr><td style="padding:32px;">
          <h2 style="margin:0 0 20px;font-size:18px;font-weight:700;color:#171717;letter-spacing:-0.3px;">
            New enquiry from ${d.name.replace(/</g, '&lt;')}
          </h2>

          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border:1px solid #D8D4CC;border-radius:8px;overflow:hidden;">
            <tbody>
              ${row('Name',         d.name)}
              ${row('Email',        d.email)}
              ${row('Company',      d.company      || '')}
              ${row('Project type', d.projectType)}
              ${row('Budget',       d.budget       || 'Not specified')}
            </tbody>
          </table>

          <div style="margin-top:24px;">
            <p style="margin:0 0 8px;font-weight:600;color:#525252;font-size:13px;text-transform:uppercase;letter-spacing:1px;">Description</p>
            <div style="background:#F6F3EC;border-left:3px solid #294FFF;padding:16px;border-radius:0 8px 8px 0;color:#171717;line-height:1.65;font-size:14px;white-space:pre-wrap;">${d.description.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
          </div>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#F6F3EC;padding:20px 32px;border-top:1px solid #D8D4CC;">
          <p style="margin:0;font-size:11px;color:#A0A0A0;">Submitted ${timestamp} · tasknexio.com · A Valen Labs product</p>
          <p style="margin:6px 0 0;font-size:11px;color:#A0A0A0;">Reply to this email to respond directly to the enquiry.</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

/* ─── Handler ─────────────────────────────────────────────────────── */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS — only needed if calling from a different origin (same Vercel project is fine)
  res.setHeader('Access-Control-Allow-Origin', 'https://tasknexio.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST')    return res.status(405).json({ error: 'Method not allowed.' });

  // Content-type check
  const contentType = req.headers['content-type'] ?? '';
  if (!contentType.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json.' });
  }

  // Rate limiting
  const ip = (req.headers['x-forwarded-for'] as string ?? req.socket?.remoteAddress ?? 'unknown').split(',')[0].trim();
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again in a minute.' });
  }

  // Validate
  const validation = validatePayload(req.body);
  if (!validation.ok) return res.status(400).json({ error: validation.error });
  const { data } = validation;

  // Env vars
  const apiKey   = process.env.RESEND_API_KEY;
  const fromAddr = process.env.ENQUIRY_FROM_EMAIL;
  const toAddr   = process.env.ENQUIRY_TO_EMAIL ?? 'contact@valenlabs.in';

  if (!apiKey || !fromAddr) {
    console.error('[send-enquiry] Missing RESEND_API_KEY or ENQUIRY_FROM_EMAIL env vars.');
    return res.status(503).json({ error: 'Email delivery is not yet configured. Please email us directly at contact@valenlabs.in.' });
  }

  // Build email
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' });
  const subject   = `New Task Nexio Project Enquiry — ${data.projectType}`;
  const html      = buildHtml(data, timestamp);
  const text      = [
    `New Project Enquiry — ${data.projectType}`,
    `Submitted: ${timestamp}`,
    '',
    `Name:         ${data.name}`,
    `Email:        ${data.email}`,
    `Company:      ${data.company || 'Not provided'}`,
    `Project type: ${data.projectType}`,
    `Budget:       ${data.budget || 'Not specified'}`,
    '',
    'Description:',
    data.description,
    '',
    '---',
    'tasknexio.com · A Valen Labs product',
  ].join('\n');

  // Send via Resend REST API (no SDK needed — avoids bundling issues)
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify({
        from:     fromAddr,          // must be a verified Resend sender
        to:       [toAddr],
        reply_to: data.email,        // visitor's email — reply goes directly to them
        subject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('[send-enquiry] Resend error:', response.status, errBody);
      return res.status(502).json({ error: 'Email delivery failed. Please email us directly at contact@valenlabs.in.' });
    }

    return res.status(200).json({ success: true, message: 'Enquiry received. We will be in touch shortly.' });

  } catch (err) {
    console.error('[send-enquiry] Fetch error:', err);
    return res.status(503).json({ error: 'Email delivery unavailable. Please email us directly at contact@valenlabs.in.' });
  }
}
