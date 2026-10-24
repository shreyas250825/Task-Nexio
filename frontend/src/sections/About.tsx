import { PRINCIPLES, PARENT_COMPANY } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

// Dark section colours — all inline so they never depend on Tailwind purge
const BG    = '#1A1A1A';
const TEXT1 = '#FFFFFF';
const TEXT2 = 'rgba(255,255,255,0.7)';
const TEXT3 = 'rgba(255,255,255,0.45)';
const TEXT4 = 'rgba(255,255,255,0.25)';
const RULE  = 'rgba(255,255,255,0.1)';

export function About() {
  return (
    <section
      id="studio"
      aria-labelledby="studio-heading"
      style={{
        background: BG,
        color: TEXT1,
        overflow: 'hidden',
        paddingTop: '7rem',
        paddingBottom: '7rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left ── */}
          <RevealWrapper className="space-y-8">
            {/* Label */}
            <p style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: TEXT4,
              marginBottom: '1rem',
            }}>
              Studio Philosophy
            </p>

            {/* Headline */}
            <h2
              id="studio-heading"
              className="font-display text-balance"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                lineHeight: 1.1,
                letterSpacing: '-0.035em',
                color: TEXT1,
              }}
            >
              Built with intention.
              <br />
              <span style={{ color: TEXT3 }}>Engineered for impact.</span>
            </h2>

            {/* Body 1 */}
            <p style={{ color: TEXT2, lineHeight: 1.75, fontSize: '1.0625rem', maxWidth: 480 }}>
              We believe good technology begins with understanding the problem. Every project
              should have a clear purpose, thoughtful design, sound engineering, and an
              outcome that matters to the people using it.
            </p>

            {/* Body 2 */}
            <p style={{ color: TEXT3, lineHeight: 1.75, fontSize: '0.9375rem', maxWidth: 480 }}>
              Task Nexio is a new studio — focused, selective, and direct. We take on a
              limited number of projects at a time so each one receives the attention it
              deserves. You work with the people who design and build the product.
            </p>

            {/* Identity table */}
            <div style={{ paddingTop: '1.25rem', borderTop: `1px solid ${RULE}` }}>
              {[
                { k: 'Studio', v: 'Task Nexio' },
                { k: 'Parent', v: PARENT_COMPANY },
                { k: 'Status', v: 'Now accepting project enquiries' },
              ].map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '0.625rem',
                    fontFamily: 'monospace',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: TEXT4,
                    width: 56,
                    flexShrink: 0,
                  }}>
                    {k}
                  </span>
                  <span style={{ fontSize: '0.875rem', color: TEXT2 }}>{v}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* ── Right — principles ── */}
          <div>
            {PRINCIPLES.map((principle, i) => (
              <RevealWrapper key={principle} delay={i * 70}>
                <div
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    paddingTop: '1.75rem',
                    paddingBottom: '1.75rem',
                    borderTop: `1px solid ${RULE}`,
                  }}
                >
                  <span style={{
                    fontFamily: 'monospace',
                    fontSize: '0.6875rem',
                    color: TEXT4,
                    flexShrink: 0,
                    marginTop: 3,
                    width: 24,
                    letterSpacing: '0.05em',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p style={{
                    fontSize: '1.0625rem',
                    lineHeight: 1.6,
                    letterSpacing: '-0.01em',
                    color: TEXT2,
                  }}>
                    {principle}
                  </p>
                </div>
              </RevealWrapper>
            ))}

            {/* Last border */}
            <div style={{ borderTop: `1px solid ${RULE}` }} />

            {/* Code accent block */}
            <RevealWrapper delay={320} direction="fade">
              <div
                style={{
                  marginTop: '2rem',
                  borderRadius: 16,
                  padding: '1.5rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'relative', zIndex: 1 }}>
                  {[
                    { c: '#60A5FA', text: '// discovery.ts' },
                    { c: '#C3E88D', text: 'const brief = await understand(client)' },
                    { c: '#F78C6C', text: 'const scope = define(brief, goals)' },
                    { c: '#82AAFF', text: 'const product = build(scope)' },
                    { c: '#C792EA', text: 'await launch(product)' },
                  ].map((line, idx) => (
                    <div key={idx} style={{ marginBottom: '0.5rem' }}>
                      <span style={{
                        fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                        fontSize: '0.8125rem',
                        color: line.c,
                        letterSpacing: '-0.01em',
                      }}>
                        {line.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
