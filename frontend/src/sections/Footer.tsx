import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, PARENT_COMPANY, CONTACT_EMAIL, NAV_LINKS } from '../lib/constants';

// All dark-section colours inline — never relying on Tailwind custom token purge
const BG    = '#0F0F0F';
const RULE  = 'rgba(255,255,255,0.1)';
const T1    = '#FFFFFF';
const T2    = 'rgba(255,255,255,0.5)';
const T3    = 'rgba(255,255,255,0.3)';
const T4    = 'rgba(255,255,255,0.18)';

export function Footer() {
  const year = new Date().getFullYear();

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      role="contentinfo"
      style={{ background: BG, color: T2 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10" style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>

        {/* ── Top grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          style={{ paddingBottom: '3.5rem', borderBottom: `1px solid ${RULE}` }}
        >
          {/* Brand — 2 cols */}
          <div className="md:col-span-2" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Wordmark */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <svg viewBox="0 0 28 28" fill="none" style={{ width: 28, height: 28, flexShrink: 0 }}>
                <rect width="28" height="28" rx="7" fill="#2563EB"/>
                <path d="M7 9h9M7 14h14M7 19h11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="9" r="2.5" fill="#93C5FD"/>
              </svg>
              <span style={{ color: T1, fontWeight: 600, fontSize: '0.9375rem', letterSpacing: '-0.01em' }}>
                {BRAND_NAME}
              </span>
            </div>

            {/* Tagline */}
            <p style={{ fontSize: '0.875rem', fontStyle: 'italic', color: T3 }}>
              {BRAND_TAGLINE}
            </p>

            {/* Parent company — "Valen Labs Private Limited" as requested */}
            <p style={{ fontSize: '0.875rem', color: T3, lineHeight: 1.6, maxWidth: 280 }}>
              A digital product studio by {PARENT_COMPANY}.
            </p>

            {/* Product links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'Valen Labs', url: 'https://valenlabs.in' },
                { label: 'Valen Live', url: 'https://valen.live' },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    fontSize: '0.875rem',
                    color: T3,
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                  }}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: T4,
            }}>
              Navigate
            </h3>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        cursor: 'pointer',
                        fontSize: '0.875rem',
                        color: T2,
                        textAlign: 'left',
                        transition: 'color 0.15s ease',
                      }}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: T4,
            }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: T2,
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T1; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = T2; }}
              >
                <Mail size={13} style={{ flexShrink: 0 }} />
                {CONTACT_EMAIL}
              </a>
              <button
                onClick={() => go('#contact')}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.875rem',
                  color: '#60A5FA',
                  textAlign: 'left',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#93C5FD'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = '#60A5FA'; }}
              >
                Start a Project
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          className="sm:flex-row"
        >
          <p style={{ fontSize: '0.75rem', color: T4, textAlign: 'center' }}>
            © {year} {BRAND_NAME} · {PARENT_COMPANY}. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
            <span style={{ fontSize: '0.75rem', color: T4 }}>Now accepting project enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
