import { ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

export function Engage() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: '#0A0D14' }}
      aria-label="Call to action"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      {/* Blue glow — bottom centre */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 300,
          background: 'radial-gradient(ellipse at center bottom, rgba(37,99,235,0.25) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">
        <RevealWrapper>
          <p className="text-2xs font-semibold tracking-widest uppercase text-white/30 mb-8">
            Let's Build Something
          </p>

          <h2
            className="font-display text-white text-balance"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
            }}
          >
            Have a vision?
            <br />
            <span style={{ color: '#60A5FA' }}>Let's make it real.</span>
          </h2>

          <p className="mt-6 text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Tell us what you're imagining. Whether it's a new website, a complex business
            portal, or an AI-powered product — let's explore what we can build together.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary CTA — white background, dark text — impossible to miss */}
            <button
              onClick={() => go('#contact')}
              className="inline-flex items-center gap-2 bg-white text-ink-90 rounded-md px-8 py-4 text-[0.9375rem] font-semibold tracking-snug shadow-xl hover:bg-blue-50 hover:text-blue-700 active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
            >
              Start a Project
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </button>

            {/* Secondary — email link, clearly readable */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors border border-white/10 hover:border-white/20 rounded-md px-5 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0D14]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
