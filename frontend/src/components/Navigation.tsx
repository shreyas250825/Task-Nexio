import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, BRAND_NAME } from '../lib/constants';
import { Button } from './Button';

export function Navigation() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface/95 backdrop-blur-md border-b border-surface-border shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16 md:h-18">

            {/* Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2 group focus-visible:outline-none"
              aria-label="Task Nexio — home"
            >
              {/* Logo mark */}
              <div className="relative w-8 h-8 flex-shrink-0">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <rect width="32" height="32" rx="8" fill="#4338ca" />
                  <path d="M8 10h10M8 16h16M8 22h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                  <circle cx="23" cy="10" r="3" fill="#818cf8"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight group-hover:text-brand-300 transition-colors">
                {BRAND_NAME}
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-surface-hover transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <Button
                as="a"
                href="#contact"
                size="sm"
                onClick={() => handleNavClick('#contact')}
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-40 md:hidden"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          {/* Panel */}
          <nav className="absolute top-16 left-0 right-0 bg-surface border-b border-surface-border shadow-xl animate-slide-down">
            <div className="px-6 py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-white hover:bg-surface-hover rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-surface-border mt-2">
                <Button
                  as="a"
                  href="#contact"
                  className="w-full justify-center"
                  onClick={() => handleNavClick('#contact')}
                >
                  Start a Project
                </Button>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
