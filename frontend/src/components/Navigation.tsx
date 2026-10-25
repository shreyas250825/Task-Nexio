import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { NAV_LINKS } from '../lib/constants';
import { useTheme } from '../lib/ThemeContext';

export function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const hamburgerRef                  = useRef<HTMLButtonElement>(null);

  const isDark = theme === 'dark';

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
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'background 0.25s ease, box-shadow 0.25s ease',
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--rule)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 6px rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 64, gap: 8,
        }}>

          {/* ── Logo ── */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}
            aria-label="Task Nexio — home"
          >
            <img
              src="/brand/task_nexio_full_logo_transparent_exact.png"
              alt="Task Nexio"
              width={1728} height={418}
              className="tn-logo-full"
              style={{ height: 44, width: 'auto', display: 'block', flexShrink: 0, objectFit: 'contain' }}
            />
            <img
              src="/brand/task_nexio_symbol_transparent_exact.png"
              alt="Task Nexio"
              width={437} height={418}
              className="tn-logo-symbol"
              style={{ height: 36, width: 'auto', display: 'none', flexShrink: 0, objectFit: 'contain' }}
            />
          </a>

          {/* ── Desktop nav ── */}
          <nav
            aria-label="Primary navigation"
            className="tn-desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, justifyContent: 'center' }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '0.5rem 0.75rem',
                  fontSize: '0.875rem', fontWeight: 500,
                  color: 'var(--nav-link)',
                  borderRadius: 4, whiteSpace: 'nowrap',
                  transition: 'color 0.15s ease, background 0.15s ease',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = 'var(--nav-ink)';
                  b.style.background = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)';
                }}
                onMouseLeave={(e) => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = 'var(--nav-link)';
                  b.style.background = 'transparent';
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Right: theme toggle + CTA ── */}
          <div className="tn-desktop-cta" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>

            {/* Theme toggle button */}
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Light mode' : 'Dark mode'}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 8,
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.15s ease',
                color: isDark ? '#F0EEF8' : '#444444',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = isDark ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.09)';
                b.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)';
                b.style.transform = 'scale(1)';
              }}
            >
              {isDark
                ? <Sun  size={16} strokeWidth={2} />
                : <Moon size={16} strokeWidth={2} />
              }
            </button>

            {/* CTA */}
            <button
              onClick={() => go('#contact')}
              aria-label="Start a project"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                background: 'var(--text-primary)', color: 'var(--bg-page)',
                padding: '0.5625rem 1.125rem', borderRadius: 6,
                fontSize: '0.8125rem', fontWeight: 600,
                border: 'none', cursor: 'pointer',
                transition: 'background 0.15s ease',
                fontFamily: 'var(--font-sans)',
                whiteSpace: 'nowrap', minHeight: 38,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--blue)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--text-primary)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--bg-page)'; }}
            >
              Start a Project <ArrowUpRight size={14} />
            </button>
          </div>

          {/* ── Mobile: theme toggle + hamburger ── */}
          <div className="tn-hamburger" style={{ display: 'none', alignItems: 'center', gap: 6 }}>
            <button
              onClick={toggle}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: 36, height: 36, borderRadius: 8,
                background: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)',
                border: isDark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)',
                cursor: 'pointer',
                color: isDark ? '#F0EEF8' : '#444444',
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              ref={hamburgerRef}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="tn-mobile-menu"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '0.5rem', background: 'none', border: 'none', cursor: 'pointer',
                color: 'var(--nav-ink)', borderRadius: 4, minWidth: 44, minHeight: 44,
              }}
            >
              {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .tn-desktop-nav { display: none !important; }
            .tn-desktop-cta { display: none !important; }
            .tn-hamburger   { display: flex !important; }
            .tn-logo-full   { display: none !important; }
            .tn-logo-symbol { display: block !important; }
          }
          @media (min-width: 768px) {
            .tn-hamburger   { display: none !important; }
            .tn-desktop-nav { display: flex !important; }
            .tn-desktop-cta { display: flex !important; }
            .tn-logo-full   { display: block !important; }
            .tn-logo-symbol { display: none !important; }
          }
        `}</style>
      </header>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div
          id="tn-mobile-menu"
          role="dialog" aria-modal="true" aria-label="Navigation menu"
          style={{ position: 'fixed', inset: 0, zIndex: 90 }}
        >
          <div
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            style={{
              position: 'absolute', top: 64, left: 0, right: 0,
              background: 'var(--bg-page)',
              borderBottom: '1px solid var(--rule)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
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
                    fontSize: '1.0625rem', fontWeight: 500,
                    color: 'var(--text-primary)',
                    textAlign: 'left', borderRadius: 6,
                    minHeight: 52, width: '100%',
                    fontFamily: 'var(--font-sans)',
                    display: 'flex', alignItems: 'center',
                  }}
                >
                  {link.label}
                </button>
              ))}
              <div style={{ paddingTop: '0.875rem', marginTop: 4, borderTop: '1px solid var(--rule)' }}>
                <button
                  onClick={() => go('#contact')}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    background: 'var(--text-primary)', color: 'var(--bg-page)',
                    padding: '1rem', borderRadius: 6, fontSize: '1rem', fontWeight: 600,
                    border: 'none', cursor: 'pointer', minHeight: 52,
                    fontFamily: 'var(--font-sans)',
                  }}
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
