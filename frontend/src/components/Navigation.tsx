import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME } from '../lib/constants';

const INK    = '#171717';
const IVORY  = '#F6F3EC';
const RULE   = '#D8D4CC';
const BLUE   = '#294FFF';
const MUTED  = '#737373';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          background: scrolled ? 'rgba(246,243,236,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${RULE}` : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 4px rgba(0,0,0,0.05)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60 }}>

          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}
            aria-label="Task Nexio — home"
          >
            {/* Logo mark with chartreuse accent */}
            <svg viewBox="0 0 30 30" fill="none" style={{ width: 28, height: 28, flexShrink: 0 }}>
              <rect width="30" height="30" rx="6" fill={INK}/>
              <path d="M8 10h9M8 15h14M8 20h11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="21.5" cy="10" r="2.5" fill="#D6FF66"/>
            </svg>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9375rem', color: INK, letterSpacing: '-0.01em' }}>
              {BRAND_NAME}
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            style={{ display: 'flex', alignItems: 'center', gap: 2 }}
            className="hidden-mobile"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.875rem',
                  fontSize: '0.875rem', fontWeight: 500, color: MUTED,
                  borderRadius: 4,
                  transition: 'color 0.15s ease, background 0.15s ease',
                  fontFamily: 'Inter, sans-serif',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = INK; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.04)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = MUTED; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden-mobile">
            <button
              className="nav-cta"
              onClick={() => go('#contact')}
              aria-label="Start a project"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              padding: '0.5rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: INK, borderRadius: 4,
            }}
            className="show-mobile"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .hidden-mobile { display: none !important; }
            .show-mobile { display: flex !important; }
          }
          @media (min-width: 768px) {
            .hidden-mobile { display: flex !important; }
            .show-mobile { display: none !important; }
          }
        `}</style>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 40,
          }}
          role="dialog"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(23,23,23,0.08)', backdropFilter: 'blur(4px)' }}
            onClick={() => setMenuOpen(false)}
          />
          {/* Panel */}
          <nav
            style={{
              position: 'absolute', top: 60, left: 0, right: 0,
              background: IVORY,
              borderBottom: `1px solid ${RULE}`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              animation: 'slideDown 0.22s cubic-bezier(0.16,1,0.3,1)',
            }}
          >
            <style>{`
              @keyframes slideDown {
                from { opacity: 0; transform: translateY(-8px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.875rem 1rem',
                    fontSize: '1rem', fontWeight: 500, color: INK,
                    textAlign: 'left', borderRadius: 4,
                    transition: 'background 0.15s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ paddingTop: '0.75rem', marginTop: 4, borderTop: `1px solid ${RULE}` }}>
                <button
                  className="nav-cta"
                  onClick={() => go('#contact')}
                  style={{ width: '100%', justifyContent: 'center', padding: '0.875rem 1rem', fontSize: '0.9375rem' }}
                >
                  Start a Project
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
