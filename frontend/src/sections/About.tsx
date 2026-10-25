import { PRINCIPLES, PARENT_LABEL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

const INK   = '#171717';
const CHART = '#D6FF66';
const RULE  = 'rgba(255,255,255,0.1)';

export function About() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      style={{ background: 'var(--bg-dark)', paddingTop: '6rem', paddingBottom: '6rem', overflow: 'hidden', position: 'relative' }}
    >
      {/* Chartreuse accent shape — top right */}
      <div
        aria-hidden="true"
        style={{ position: 'absolute', top: 0, right: 0, width: 200, height: 200, background: CHART, opacity: 0.06, borderRadius: '0 0 0 200px', pointerEvents: 'none' }}
      />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 6rem)', alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <RevealWrapper>
            <div className="about-sticky" style={{ position: 'sticky', top: '6rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>Studio Philosophy</span>
              </div>

              <h2
                id="studio-heading"
                className="font-display"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, letterSpacing: '-0.03em', color: '#FFFFFF', margin: 0 }}
              >
                Built with intention.
                <br />
                <em className="font-display-italic" style={{ color: 'rgba(255,255,255,0.35)' }}>Engineered for impact.</em>
              </h2>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', margin: 0, maxWidth: 420 }}>
                We believe good technology begins with understanding the problem. Every project
                should have a clear purpose, thoughtful design, sound engineering, and an
                outcome that matters to the people using it.
              </p>

              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: 'rgba(255,255,255,0.38)', margin: 0, maxWidth: 420 }}>
                Task Nexio is a focused studio. We take on a limited number of projects at a
                time so each one receives the attention it deserves.
              </p>

              <div style={{ paddingTop: '1.25rem', borderTop: `1px solid ${RULE}`, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { k: 'Studio', v: 'Task Nexio' },
                  { k: 'Parent', v: PARENT_LABEL },
                  { k: 'Status', v: 'Now accepting project enquiries' },
                ].map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.625rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', width: 52, flexShrink: 0 }}>{k}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.65)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealWrapper>

          {/* Right — principles */}
          <div>
            {PRINCIPLES.map((principle, i) => (
              <RevealWrapper key={principle} delay={i * 70}>
                <div style={{ display: 'flex', gap: '1.5rem', paddingTop: '1.75rem', paddingBottom: '1.75rem', borderTop: `1px solid ${RULE}` }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)', flexShrink: 0, width: 24, marginTop: 3, letterSpacing: '0.05em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 1.75vw, 1.125rem)', lineHeight: 1.6, letterSpacing: '-0.01em', color: 'rgba(255,255,255,0.78)', margin: 0 }}>
                    {principle}
                  </p>
                </div>
              </RevealWrapper>
            ))}
            <div style={{ borderTop: `1px solid ${RULE}` }} />

            {/* Code block accent */}
            <RevealWrapper delay={320} direction="fade">
              <div style={{ marginTop: '2rem', borderRadius: 10, padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {[
                  { c: '#60A5FA', t: '// discovery.ts' },
                  { c: '#C3E88D', t: 'const brief = await understand(client)' },
                  { c: '#F78C6C', t: 'const scope = define(brief, goals)' },
                  { c: '#82AAFF', t: 'const product = build(scope)' },
                  { c: '#C792EA', t: 'await launch(product)' },
                ].map((line, idx) => (
                  <div key={idx} style={{ marginBottom: idx < 4 ? '0.5rem' : 0 }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.8125rem', color: line.c, letterSpacing: '-0.01em' }}>
                      {line.t}
                    </span>
                  </div>
                ))}
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .about-sticky {
            position: static !important;
            top: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
