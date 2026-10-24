import { Mail } from 'lucide-react';
import { BRAND_NAME, PARENT_COMPANY, CONTACT_EMAIL, NAV_LINKS } from '../lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-surface-card" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                <rect width="32" height="32" rx="8" fill="#4338ca" />
                <path d="M8 10h10M8 16h16M8 22h12" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
                <circle cx="23" cy="10" r="3" fill="#818cf8"/>
              </svg>
              <span className="text-white font-semibold text-lg tracking-tight">{BRAND_NAME}</span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              A digital product studio by {PARENT_COMPANY}.
              Building websites, business portals, and AI-powered applications for ambitious businesses.
            </p>

            {/* Email */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors"
            >
              <Mail size={14} />
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Navigation column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-600">Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services column */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-600">Services</h3>
            <ul className="space-y-2.5">
              {[
                'Websites & Landing Pages',
                'Business Portals & Dashboards',
                'AI-Powered Applications',
                'Custom Software & MVPs',
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-slate-500 hover:text-slate-200 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600 text-center sm:text-left">
            © {year} {BRAND_NAME} — {PARENT_COMPANY}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs text-slate-600">Now accepting project enquiries</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
