import { PROCESS_STEPS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

const INK   = '#171717';
const IVORY = '#F6F3EC';
const BLUE  = '#294FFF';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const CHART = '#D6FF66';

export function Process() {
  return (
    <section id="process" style={{ background: IVORY, paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="process-heading">
      <div className="container">

        {/* Header */}
        <RevealWrapper>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
              <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>How We Work</span>
            </div>
            <h2 id="process-heading" className="text-section" style={{ margin: 0 }}>
              A clear path from<br />idea to launch.
            </h2>
          </div>
        </RevealWrapper>

        {/* Desktop horizontal timeline */}
        <div className="process-desktop">
          {/* Track line */}
          <div style={{ position: 'relative', marginBottom: '3rem' }}>
            <div style={{ position: 'absolute', top: 28, left: '6.25%', right: '6.25%', height: 1, background: `linear-gradient(90deg, ${RULE} 0%, ${BLUE}60 50%, ${RULE} 100%)` }} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {PROCESS_STEPS.map((step, i) => (
                <RevealWrapper key={step.number} delay={i * 90}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    {/* Node */}
                    <div style={{
                      position: 'relative', zIndex: 1,
                      width: 56, height: 56, borderRadius: '50%',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      background: i === 0 ? BLUE : '#FFFFFF',
                      border: `1.5px solid ${i === 0 ? BLUE : RULE}`,
                      boxShadow: i === 0 ? `0 0 0 4px ${BLUE}18, 0 4px 16px ${BLUE}30` : '0 2px 8px rgba(0,0,0,0.06)',
                      marginBottom: '1.5rem',
                    }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.625rem', letterSpacing: '0.05em', color: i === 0 ? '#FFFFFF' : MUTED }}>
                        {step.number}
                      </span>
                      {/* Chartreuse dot on first step */}
                      {i === 0 && (
                        <div style={{ position: 'absolute', top: -3, right: -3, width: 10, height: 10, borderRadius: '50%', background: CHART, border: `2px solid ${IVORY}` }} />
                      )}
                    </div>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1rem', letterSpacing: '-0.015em', color: INK, margin: '0 0 0.5rem' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                      {step.body}
                    </p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="process-mobile" style={{ display: 'none' }}>
          {PROCESS_STEPS.map((step, i) => (
            <RevealWrapper key={step.number} delay={i * 80}>
              <div style={{ display: 'flex', gap: '1.25rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: i === 0 ? BLUE : '#FFFFFF',
                    border: `1.5px solid ${i === 0 ? BLUE : RULE}`,
                    boxShadow: i === 0 ? `0 4px 14px ${BLUE}30` : '0 2px 6px rgba(0,0,0,0.05)',
                    flexShrink: 0, position: 'relative',
                  }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.625rem', color: i === 0 ? '#FFF' : MUTED }}>{step.number}</span>
                    {i === 0 && <div style={{ position: 'absolute', top: -3, right: -3, width: 9, height: 9, borderRadius: '50%', background: CHART, border: `2px solid ${IVORY}` }} />}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div style={{ width: 1, flex: 1, minHeight: 32, background: RULE, margin: '8px 0' }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < PROCESS_STEPS.length - 1 ? '1.5rem' : 0 }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '1.0625rem', color: INK, margin: '0 0 0.375rem', letterSpacing: '-0.015em' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.65, color: MUTED, margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: MUTED, marginTop: '2.5rem', textAlign: 'center' }}>
            Ready to start?{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: BLUE, padding: 0, textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Tell us about your project →
            </button>
          </p>
        </RevealWrapper>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .process-desktop { display: none !important; }
          .process-mobile  { display: flex !important; flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
