import { ArrowUpRight, Mail } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, PARENT_LABEL, CONTACT_EMAIL, NAV_LINKS } from '../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="bg-ink text-white/50" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14 border-b border-white/8">

          {/* Brand — 2 cols */}
          <div className="md:col-span-2 space-y-5">
            {/* Wordmark */}
            <div className="flex items-center gap-2.5">
              <svg viewBox="0 0 28 28" fill="none" className="w-7 h-7">
                <rect width="28" height="28" rx="7" fill="#2563EB"/>
                <path d="M7 9h9M7 14h14M7 19h11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="20" cy="9" r="2.5" fill="#93C5FD"/>
              </svg>
              <span className="text-white font-semibold text-[0.9375rem] tracking-tight">{BRAND_NAME}</span>
            </div>

            <p className="text-sm italic text-white/35">{BRAND_TAGLINE}</p>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">{PARENT_LABEL}</p>

            {/* Valen Labs properties */}
            <div className="space-y-2">
              {[
                { label: 'Valen Labs', url: 'https://valenlabs.in' },
                { label: 'Valen Live', url: 'https://valen.live'   },
              ].map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-white/35 hover:text-white transition-colors group"
                >
                  {link.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="space-y-4">
            <h3 className="text-2xs font-semibold tracking-widest uppercase text-white/20">Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => go(link.href)}
                      className="text-sm text-white/40 hover:text-white transition-colors text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-2xs font-semibold tracking-widest uppercase text-white/20">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <Mail size={13} className="flex-shrink-0" />
                {CONTACT_EMAIL}
              </a>
              <button
                onClick={() => go('#contact')}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors text-left flex items-center gap-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
              >
                Start a Project
                <ArrowUpRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            © {year} {BRAND_NAME} · {PARENT_LABEL}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-white/20">Now accepting project enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
