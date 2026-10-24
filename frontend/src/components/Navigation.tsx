import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS } from '../lib/constants';

export function Navigation() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 32);
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
        className={[
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-canvas/90 backdrop-blur-xl border-b border-ink-10 shadow-xs'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-15 md:h-16">

          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="Task Nexio — home"
          >
            <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7 flex-shrink-0">
              <rect width="28" height="28" rx="7" fill="#0F0F0F"/>
              <path d="M7 9h9M7 14h14M7 19h11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="9" r="2.5" fill="#60A5FA"/>
            </svg>
            <span className="text-ink font-semibold text-[0.9375rem] tracking-tight group-hover:text-blue-600 transition-colors duration-150">
              {BRAND_NAME}
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="px-3.5 py-2 text-sm text-ink-60 hover:text-ink rounded-md hover:bg-ink-5 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => go('#contact')}
              className="nav-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 flex items-center gap-1.5"
            >
              Start a Project
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-ink-60 hover:text-ink rounded-md hover:bg-ink-5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 md:hidden"
        >
          <div
            className="absolute inset-0 bg-ink/5 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <nav className="absolute top-[60px] left-0 right-0 bg-paper border-b border-ink-10 shadow-lg animate-slide-down">
            <div className="px-6 py-5 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => go(link.href)}
                  className="text-left px-4 py-3 text-ink-80 hover:text-ink hover:bg-ink-5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-3 mt-1 border-t border-ink-10">
                <button
                  onClick={() => go('#contact')}
                  className="w-full nav-cta flex items-center justify-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  Start a Project
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
