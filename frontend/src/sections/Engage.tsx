import { ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

export function Engage() {
  const go = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section aria-label="Call to action" style={{ background: '#294FFF', paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden' }}>
      {/* Chartreuse geometric accent */}
      <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: -40, width: 220, height: 220, borderRadius: '50%', background: '#D6FF66', opacity: 0.12, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: -60, left: -40, width: 180, height: 180, borderRadius: '50%', background: '#D6FF66', opacity: 0.08, pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
        <RevealWrapper direction="fade">
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
            Let's Build Something
          </p>

          <h2
            className="font-display"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.035em', color: '#FFFFFF', margin: '0 0 1.5rem' }}
          >
            Have a vision?<br />
            <em className="font-display-italic" style={{ color: 'rgba(255,255,255,0.6)' }}>Let's make it real.</em>
          </h2>

          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.125rem)', lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', margin: '0 auto 2.5rem', maxWidth: 520 }}>
            Tell us what you're imagining. Whether it's a new website, a complex business
            portal, or an AI-powered product — let's explore what we can build together.
          </p>

          <div className="engage-cta-row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            {/* Primary — white bg, blue text */}
            <button
              onClick={go}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#FFFFFF', color: '#294FFF', padding: '1rem 2rem', borderRadius: 5, fontSize: '0.9375rem', fontWeight: 600, border: 'none', cursor: 'pointer', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', transition: 'background 0.15s ease', minHeight: 52 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#F0F4FF'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = '#FFFFFF'; }}
            >
              Start a Project
              <ArrowUpRight size={17} />
            </button>

            {/* Secondary — bordered */}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.8)', fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 500, padding: '1rem 1.5rem', borderRadius: 5, border: '1.5px solid rgba(255,255,255,0.25)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', minHeight: 52 }}
              onMouseEnter={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = '#FFFFFF'; a.style.borderColor = 'rgba(255,255,255,0.5)'; }}
              onMouseLeave={(e) => { const a = e.currentTarget as HTMLAnchorElement; a.style.color = 'rgba(255,255,255,0.8)'; a.style.borderColor = 'rgba(255,255,255,0.25)'; }}
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </RevealWrapper>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .engage-cta-row {
            flex-direction: column !important;
            align-items: stretch !important;
          }
          .engage-cta-row > * {
            justify-content: center !important;
            width: 100% !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
