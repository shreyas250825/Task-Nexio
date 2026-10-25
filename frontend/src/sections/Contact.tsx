import { useState, useId } from 'react';
import { Send, AlertCircle, Mail, Info, CheckCircle, Loader } from 'lucide-react';
import { RevealWrapper } from '../components/RevealWrapper';
import { CONTACT_EMAIL, BUDGET_OPTIONS, PROJECT_TYPES } from '../lib/constants';

const INK   = '#171717';
const BLUE  = '#294FFF';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const CHART = '#D6FF66';

interface FormData {
  name: string; email: string; company: string;
  projectType: string; budget: string; description: string;
  honeypot: string; // never shown — anti-bot
}
interface FormErrors { name?: string; email?: string; projectType?: string; description?: string; }

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

function validate(d: FormData): FormErrors {
  const e: FormErrors = {};
  if (!d.name.trim())                                      e.name        = 'Please enter your full name.';
  if (!d.email.trim())                                     e.email       = 'Please enter your email address.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))   e.email       = 'Please enter a valid email address.';
  if (!d.projectType)                                      e.projectType = 'Please select a project type.';
  if (!d.description.trim())                               e.description = 'Please describe your project briefly.';
  else if (d.description.trim().length < 20)               e.description = 'Please add a bit more detail (at least 20 characters).';
  return e;
}

function buildMailto(d: FormData) {
  const s = encodeURIComponent(`Project Enquiry — ${d.projectType || 'General'}`);
  const b = encodeURIComponent(`Hi Task Nexio,\n\nName: ${d.name}\nEmail: ${d.email}\nCompany: ${d.company || '—'}\nType: ${d.projectType}\nBudget: ${d.budget || 'Not specified'}\n\nDescription:\n${d.description}\n\n— ${d.name}`);
  return `mailto:${CONTACT_EMAIL}?subject=${s}&body=${b}`;
}

const inputStyle: React.CSSProperties = {
  width: '100%', display: 'block',
  background: 'var(--bg-paper)', border: `1.5px solid ${RULE}`,
  borderRadius: 5, padding: '0.8125rem 1rem',
  fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9375rem', color: 'var(--text-primary)',
  outline: 'none', transition: 'border-color 0.15s ease',
  boxSizing: 'border-box', minHeight: 48,
};

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label htmlFor={id} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
        {label}
        {required && <span style={{ color: BLUE, marginLeft: 2 }}>*</span>}
        {!required && <span style={{ color: 'var(--text-muted)', marginLeft: 6, fontSize: '0.75rem', fontWeight: 400 }}>(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" style={{ display: 'flex', alignItems: 'center', gap: 5, fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', color: '#EF4444', margin: 0 }}>
          <AlertCircle size={12} style={{ flexShrink: 0 }} />
          {error}
        </p>
      )}
    </div>
  );
}

export function Contact() {
  const uid = useId();
  const empty: FormData = { name: '', email: '', company: '', projectType: '', budget: '', description: '', honeypot: '' };

  const [form, setForm]           = useState<FormData>(empty);
  const [errors, setErrors]       = useState<FormErrors>({});
  const [submitState, setSubmit]  = useState<SubmitState>('idle');
  const [apiError, setApiError]   = useState('');
  const [mailtoFallback, setMailtoFallback] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitState === 'loading') return; // prevent double-submit

    const errs = validate(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      document.getElementById(`${uid}-${Object.keys(errs)[0]}`)?.focus();
      return;
    }

    setSubmit('loading');
    setApiError('');

    try {
      const res = await fetch('/api/send-enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:        form.name,
          email:       form.email,
          company:     form.company,
          projectType: form.projectType,
          budget:      form.budget,
          description: form.description,
          honeypot:    form.honeypot,
        }),
      });

      const json = await res.json().catch(() => ({})) as { error?: string; message?: string };

      if (res.ok) {
        setSubmit('success');
      } else {
        // API returned an error — fall back to mailto transparently
        const errMsg = json.error ?? 'Something went wrong.';
        setApiError(errMsg);
        setMailtoFallback(buildMailto(form));
        setSubmit('error');
      }
    } catch {
      // Network error — API unreachable (e.g. not yet configured), fall back to mailto
      setApiError('Unable to reach the server. You can email us directly.');
      setMailtoFallback(buildMailto(form));
      setSubmit('error');
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-page)', paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'start' }}>

          {/* ── Left ── */}
          <RevealWrapper>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>Contact</span>
              </div>

              <h2
                id="contact-heading"
                className="font-display"
                style={{ fontSize: 'clamp(1.875rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--text-primary)', margin: 0 }}
              >
                Have a vision?<br />
                <em className="font-display-italic" style={{ color: BLUE }}>Let's build it.</em>
              </h2>

              <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0, maxWidth: 380 }}>
                Tell us what you're imagining. We'll help you shape the idea into a real digital product.
              </p>

              {/* Email card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 1.25rem', background: 'var(--bg-paper)', border: `1.5px solid ${RULE}`, borderRadius: 8 }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: '#EFF2FF', border: '1px solid #BFC9FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={18} color={BLUE} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 2px' }}>Email us directly</p>
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: BLUE, textDecoration: 'none', wordBreak: 'break-all' }}>
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: CHART, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem', color: MUTED }}>Now accepting project enquiries</span>
              </div>
            </div>
          </RevealWrapper>

          {/* ── Right: form ── */}
          <RevealWrapper delay={100}>

            {submitState === 'success' ? (
              /* ── Success ── */
              <div style={{ background: 'var(--bg-paper)', border: `1.5px solid ${RULE}`, borderRadius: 12, padding: 'clamp(2rem, 5vw, 3rem)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#F0FDF4', border: '1px solid #86EFAC', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle size={26} color="#16A34A" />
                </div>
                <h3 style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, fontSize: '1.125rem', color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.015em' }}>
                  Enquiry sent successfully!
                </h3>
                <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                  We've received your message and will get back to you at{' '}
                  <strong style={{ color: INK }}>{form.email}</strong> shortly.
                </p>
                <button
                  onClick={() => { setSubmit('idle'); setForm(empty); }}
                  style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-muted)', background: 'none', border: `1.5px solid ${RULE}`, borderRadius: 5, padding: '0.625rem 1.25rem', cursor: 'pointer', minHeight: 44 }}
                >
                  Send another enquiry
                </button>
              </div>

            ) : (
              /* ── Form ── */
              <form
                onSubmit={onSubmit}
                noValidate
                style={{ background: 'var(--bg-paper)', border: `1.5px solid ${RULE}`, borderRadius: 12, padding: 'clamp(1.25rem, 4vw, 2.5rem)', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                aria-label="Project enquiry form"
              >
                {/* Honeypot — hidden from real users */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeypot"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={onChange}
                  />
                </div>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field id={`${uid}-name`} label="Full name" required error={errors.name}>
                    <input id={`${uid}-name`} name="name" type="text" autoComplete="name" value={form.name} onChange={onChange} placeholder="Your full name" style={inputStyle} aria-invalid={!!errors.name}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                      onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                  </Field>
                  <Field id={`${uid}-email`} label="Business email" required error={errors.email}>
                    <input id={`${uid}-email`} name="email" type="email" autoComplete="email" value={form.email} onChange={onChange} placeholder="you@company.com" style={inputStyle} aria-invalid={!!errors.email}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                      onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                  </Field>
                </div>

                <Field id={`${uid}-company`} label="Company" error={undefined}>
                  <input id={`${uid}-company`} name="company" type="text" autoComplete="organization" value={form.company} onChange={onChange} placeholder="Your company name" style={inputStyle}
                    onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = BLUE; }}
                    onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = RULE; }} />
                </Field>

                <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <Field id={`${uid}-projectType`} label="Project type" required error={errors.projectType}>
                    <select id={`${uid}-projectType`} name="projectType" value={form.projectType} onChange={onChange} style={{ ...inputStyle, cursor: 'pointer' }} aria-invalid={!!errors.projectType}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = BLUE; }}
                      onBlur={(e)  => { (e.target as HTMLSelectElement).style.borderColor = RULE; }}>
                      <option value="" disabled>Select type…</option>
                      {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </Field>
                  <Field id={`${uid}-budget`} label="Budget" error={undefined}>
                    <select id={`${uid}-budget`} name="budget" value={form.budget} onChange={onChange} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = BLUE; }}
                      onBlur={(e)  => { (e.target as HTMLSelectElement).style.borderColor = RULE; }}>
                      <option value="">Not sure yet</option>
                      {BUDGET_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </Field>
                </div>

                <Field id={`${uid}-description`} label="Project description" required error={errors.description}>
                  <textarea id={`${uid}-description`} name="description" rows={5} value={form.description} onChange={onChange}
                    placeholder="Tell us about your project — what you're building, the problem you're solving, and any relevant context."
                    style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6, minHeight: 120 }} aria-invalid={!!errors.description}
                    onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = BLUE; }}
                    onBlur={(e)  => { (e.target as HTMLTextAreaElement).style.borderColor = RULE; }} />
                </Field>

                {/* API error state — preserves form data, offers mailto fallback */}
                {submitState === 'error' && (
                  <div style={{ display: 'flex', gap: 10, padding: '0.875rem 1rem', background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: 7 }}>
                    <Info size={15} color="#C2410C" style={{ flexShrink: 0, marginTop: 1 }} />
                    <div>
                      <p style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8125rem', lineHeight: 1.55, color: '#9A3412', margin: 0 }}>
                        {apiError}
                      </p>
                      {mailtoFallback && (
                        <a
                          href={mailtoFallback}
                          style={{ fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.8125rem', color: BLUE, fontWeight: 600, display: 'inline-block', marginTop: 4 }}
                        >
                          Open pre-filled email instead →
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    background: submitState === 'loading' ? '#4B6AFF' : INK,
                    color: '#FFFFFF', border: 'none', borderRadius: 5,
                    padding: '1rem 1.5rem',
                    fontFamily: 'Inter, system-ui, sans-serif', fontSize: '0.9375rem', fontWeight: 600,
                    cursor: submitState === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'background 0.15s ease',
                    minHeight: 52, width: '100%',
                    opacity: submitState === 'loading' ? 0.8 : 1,
                  }}
                  onMouseEnter={(e) => { if (submitState !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = BLUE; }}
                  onMouseLeave={(e) => { if (submitState !== 'loading') (e.currentTarget as HTMLButtonElement).style.background = INK; }}
                >
                  {submitState === 'loading'
                    ? <><Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> Sending…</>
                    : <><Send size={16} /> Send Enquiry</>
                  }
                </button>

                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
