import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../lib/constants';

const INK   = '#171717';
const IVORY = '#F6F3EC';
const RULE  = '#D8D4CC';
const BLUE  = '#294FFF';
const MUTED = '#737373';

/* ─── Inline logo SVG components ─────────────────────────────────── */
function LogoSymbol({ size = 28 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      style={{ width: size, height: size, flexShrink: 0 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="navSym" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#294FFF" />
          <stop offset="55%"  stopColor="#6B4FFF" />
          <stop offset="100%" stopColor="#8B50FF" />
        </linearGradient>
      </defs>
      <path
        d="M6 56 L6 8 L18 8 L34 38 L34 8 L46 8 L46 56 L34 56 L18 26 L18 56 Z"
        fill="url(#navSym)"
      />
      <path d="M46 32 L56 25 L56 39 Z" fill="#294FFF" />
      <rect x="40" y="4" width="12" height="12" rx="2.5" fill="#D6FF66" />
    </svg>
  );
}

function LogoWordmark({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? '#FFFFFF' : INK;
  const blueColor = dark ? '#6B86FF' : BLUE;
  return (
    <svg
      viewBox="0 0 230 32"
      fill="none"
      style={{ height: 22, width: 'auto', flexShrink: 0 }}
      aria-hidden="true"
    >
      <text
        x="0" y="24"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="26" fontWeight="700"
        letterSpacing="-0.6"
        fill={textColor}
      >
        Task
      </text>
      <text
        x="72" y="24"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="26" fontWeight="700"
        letterSpacing="-0.6"
        fill={blueColor}
      >
        Nexio
      </text>
    </svg>
  );
}

export function Navigation() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const menuRef                   = useRef<HTMLDivElement>(null);
  const hamburgerRef              = useRef<HTMLButtonElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  /* Close menu on wide viewport */
  useEffect(() => {
    const h = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  /* Body scroll lock */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* Escape key closes menu */
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

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
          zIndex: 100,
          transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          background: scrolled ? 'rgba(246,243,236,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? `1px solid ${RULE}` : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 6px rgba(0,0,0,0.06)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 1.25rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
            gap: 8,
          }}
        >
          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}
            aria-label="Task Nexio — home"
          >
            <LogoSymbol size={28} />
            <LogoWordmark />
          </a>

          {/* ── Desktop nav ── */}
          <nav
            aria-label="Primary navigation"
            style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
            className="tn-desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem', fontWeight: 500, color: MUTED,
                  borderRadius: 4, whiteSpace: 'nowrap',
                  transition: 'color 0.15s ease, background 0.15s ease',
                  fontFamily: 'Inter, system-ui, sans-serif',
                }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = INK;
                  b.style.background = 'rgba(0,0,0,0.04)';
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = MUTED;
                  b.style.background = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="tn-desktop-cta" style={{ flexShrink: 0 }}>
            <button
              onClick={() => go('#contact')}
              aria-label="Start a project"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: INK, color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: 5,
                fontSize: '0.8125rem', fontWeight: 600,
                border: 'none', cursor: 'pointer',
                transition: 'background 0.15s ease',
                fontFamily: 'Inter, system-ui, sans-serif',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BLUE; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = INK; }}
            >
              Start a Project <ArrowUpRight size={13} />
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            ref={hamburgerRef}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="tn-mobile-menu"
            className="tn-hamburger"
            style={{
              display: 'none', /* shown via CSS */
              padding: '0.5rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: INK, borderRadius: 4,
              minWidth: 44, minHeight: 44,
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            {menuOpen
              ? <X size={22} strokeWidth={2} />
              : <Menu size={22} strokeWidth={2} />
            }
          </button>
        </div>

        {/* Responsive show/hide styles — in header so they're always rendered */}
        <style>{`
          @media (max-width: 767px) {
            .tn-desktop-nav  { display: none !important; }
            .tn-desktop-cta  { display: none !important; }
            .tn-hamburger    { display: flex !important; }
          }
          @media (min-width: 768px) {
            .tn-hamburger    { display: none !important; }
            .tn-desktop-nav  { display: flex !important; }
            .tn-desktop-cta  { display: block !important; }
          }
        `}</style>
      </header>

      {/* ── Mobile menu overlay ── */}
      {menuOpen && (
        <div
          id="tn-mobile-menu"
          ref={menuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          style={{ position: 'fixed', inset: 0, zIndex: 90 }}
        >
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(23,23,23,0.15)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Panel */}
          <nav
            style={{
              position: 'absolute', top: 60, left: 0, right: 0,
              background: IVORY,
              borderBottom: `1px solid ${RULE}`,
              boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
              animation: 'tnSlideDown 0.2s cubic-bezier(0.16,1,0.3,1) both',
            }}
            aria-label="Mobile navigation"
          >
            <style>{`
              @keyframes tnSlideDown {
                from { opacity: 0; transform: translateY(-10px); }
                to   { opacity: 1; transform: translateY(0); }
              }
            `}</style>

            <div style={{ padding: '1rem 1.25rem 1.25rem', display: 'flex', flexDirection: 'column', gap: 2 }}>
              {NAV_LINKS.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  autoFocus={idx === 0}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '0.9375rem 1rem',
                    fontSize: '1.0625rem', fontWeight: 500, color: INK,
                    textAlign: 'left', borderRadius: 6,
                    minHeight: 52,
                    width: '100%',
                    transition: 'background 0.12s ease',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    display: 'flex', alignItems: 'center',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                  onTouchStart={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(0,0,0,0.06)'; }}
                  onTouchEnd={(e)   => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
                >
                  {link.label}
                </button>
              ))}

              <div style={{ paddingTop: '0.875rem', marginTop: 4, borderTop: `1px solid ${RULE}` }}>
                <button
                  onClick={() => go('#contact')}
                  style={{
                    width: '100%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: 6,
                    background: INK, color: '#fff',
                    padding: '1rem',
                    borderRadius: 6,
                    fontSize: '1rem', fontWeight: 600,
                    border: 'none', cursor: 'pointer',
                    minHeight: 52,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = BLUE; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = INK; }}
                >
                  Start a Project <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
