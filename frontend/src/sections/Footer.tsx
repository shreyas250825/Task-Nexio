import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND_TAGLINE, PARENT_LABEL, CONTACT_EMAIL, NAV_LINKS } from '../lib/constants';

const BG   = '#171717';
const T1   = '#FFFFFF';
const T2   = 'rgba(255,255,255,0.5)';
const T3   = 'rgba(255,255,255,0.28)';
const T4   = 'rgba(255,255,255,0.16)';
const RULE = 'rgba(255,255,255,0.1)';
const CHART= '#D6FF66';

export function Footer() {
  const year = new Date().getFullYear();
  const go   = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <footer role="contentinfo" style={{ background: BG }}>
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>

        {/* Top grid */}
        <div
          className="footer-grid"
          style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem', paddingBottom: '3rem', borderBottom: `1px solid ${RULE}` }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 0 }}>

            {/* Official logo — dark variant (SVG inline, no external dependency) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {/* Symbol */}
              <svg viewBox="0 0 64 64" fill="none" style={{ width: 28, height: 28, flexShrink: 0 }} aria-hidden="true">
                <defs>
                  <linearGradient id="fSym" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%"   stopColor="#294FFF"/>
                    <stop offset="55%"  stopColor="#6B4FFF"/>
                    <stop offset="100%" stopColor="#8B50FF"/>
                  </linearGradient>
                </defs>
                <path d="M6 56 L6 8 L18 8 L34 38 L34 8 L46 8 L46 56 L34 56 L18 26 L18 56 Z" fill="url(#fSym)"/>
                <path d="M46 32 L56 25 L56 39 Z" fill="#294FFF"/>
                <rect x="40" y="4" width="12" height="12" rx="2.5" fill={CHART}/>
              </svg>
              {/* Wordmark */}
              <svg viewBox="0 0 230 32" fill="none" style={{ height: 20, width: 'auto' }} aria-label="Task Nexio" role="img">
                <text x="0"  y="24" fontFamily="'Inter', system-ui, sans-serif" fontSize="26" fontWeight="700" letterSpacing="-0.6" fill={T1}>Task</text>
                <text x="72" y="24" fontFamily="'Inter', system-ui, sans-serif" fontSize="26" fontWeight="700" letterSpacing="-0.6" fill="#6B86FF">Nexio</text>
              </svg>
            </div>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontStyle: 'italic', color: T3, margin: 0 }}>{BRAND_TAGLINE}</p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: T3, margin: 0, lineHeight: 1.6, maxWidth: 260 }}>{PARENT_LABEL}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { label: 'Valen Labs', url: 'https://valenlabs.in' },
                { label: 'Valen Live', url: 'https://valen.live' },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: T3, textDecoration: 'none', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T1; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T3; }}
                >
                  {link.label}
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: T4, margin: 0 }}>Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: T2, textAlign: 'left', transition: 'color 0.15s ease', minHeight: 32 }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = T1; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = T2; }}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: T4, margin: 0 }}>Contact</h3>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: T2, textDecoration: 'none', transition: 'color 0.15s ease', wordBreak: 'break-all' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T1; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T2; }}
            >
              <Mail size={13} style={{ flexShrink: 0 }} />
              {CONTACT_EMAIL}
            </a>
            <button
              onClick={() => go('#contact')}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: '#6B86FF', transition: 'color 0.15s ease', minHeight: 32 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#93AEFF'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#6B86FF'; }}
            >
              Start a Project <ArrowUpRight size={13} />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: '1.75rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: T4, margin: 0 }}>
            © {year} Task Nexio · {PARENT_LABEL}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: CHART, display: 'inline-block' }} />
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: T4 }}>Now accepting project enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
