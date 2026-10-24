import { ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

export function Engage() {
  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      aria-label="Call to action"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: '#0A0D14',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      {/* Blue radial glow at bottom */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 320,
          background: 'radial-gradient(ellipse at center bottom, rgba(37,99,235,0.22) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="max-w-4xl mx-auto px-6 md:px-10"
        style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <RevealWrapper>
          {/* Label */}
          <p style={{
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.3)',
            marginBottom: '2rem',
          }}>
            Let's Build Something
          </p>

          {/* Headline */}
          <h2
            className="font-display text-balance"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            Have a vision?
            <br />
            <span style={{ color: '#60A5FA' }}>Let's make it real.</span>
          </h2>

          {/* Body */}
          <p style={{
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '600px',
            margin: '0 auto 3rem',
          }}>
            Tell us what you're imagining. Whether it's a new website, a complex business
            portal, or an AI-powered product — let's explore what we can build together.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            {/* Primary — white bg, dark text */}
            <button
              onClick={() => go('#contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#FFFFFF',
                color: '#0F0F0F',
                borderRadius: '8px',
                padding: '1rem 2rem',
                fontSize: '0.9375rem',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                transition: 'background 0.15s ease, color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = '#EFF6FF';
                b.style.color = '#1D4ED8';
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = '#FFFFFF';
                b.style.color = '#0F0F0F';
              }}
            >
              Start a Project
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </button>

            {/* Secondary — email, bordered */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '8px',
                padding: '0.875rem 1.25rem',
                textDecoration: 'none',
                transition: 'color 0.15s ease, border-color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = '#FFFFFF';
                a.style.borderColor = 'rgba(255,255,255,0.3)';
              }}
              onMouseLeave={(e) => {
                const a = e.currentTarget as HTMLAnchorElement;
                a.style.color = 'rgba(255,255,255,0.65)';
                a.style.borderColor = 'rgba(255,255,255,0.15)';
              }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
