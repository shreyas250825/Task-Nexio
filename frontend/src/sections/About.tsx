import { PRINCIPLES, PARENT_LABEL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

export function About() {
  return (
    <section id="studio" className="bg-ink-90 text-white py-28 md:py-36 overflow-hidden" aria-labelledby="studio-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — headline + intro */}
          <RevealWrapper className="space-y-8">
            <div>
              <p className="text-2xs font-semibold tracking-widest uppercase text-white/30 mb-4">
                Studio Philosophy
              </p>
              <h2
                id="studio-heading"
                className="font-display text-white text-balance"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
              >
                Built with intention.
                <br />
                <span style={{ color: 'rgba(255,255,255,0.4)' }}>Engineered for impact.</span>
              </h2>
            </div>

            <p className="text-white/60 leading-relaxed text-lg max-w-lg">
              We believe good technology begins with understanding the problem. Every project
              should have a clear purpose, thoughtful design, sound engineering, and an
              outcome that matters to the people using it.
            </p>

            <p className="text-white/40 leading-relaxed max-w-lg">
              Task Nexio is a new studio — focused, selective, and direct. We take on a
              limited number of projects at a time so each one receives the attention it
              deserves. You work with the people who design and build the product.
            </p>

            {/* Identity table */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              {[
                { k: 'Studio',   v: 'Task Nexio' },
                { k: 'Parent',   v: PARENT_LABEL },
                { k: 'Status',   v: 'Now accepting project enquiries' },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-baseline gap-4">
                  <span className="text-xs font-mono tracking-wider uppercase text-white/25 w-16 flex-shrink-0">{k}</span>
                  <span className="text-sm text-white/70">{v}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Right — principles */}
          <div className="space-y-0">
            {PRINCIPLES.map((principle, i) => (
              <RevealWrapper key={principle} delay={i * 60}>
                <div className="flex gap-5 py-7 border-t border-white/8 last:border-b group">
                  {/* Number */}
                  <span
                    className="font-mono text-white/15 tabular flex-shrink-0 mt-0.5 w-6"
                    style={{ fontSize: '0.7rem', letterSpacing: '0.05em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* Text */}
                  <p
                    className="text-white/80 group-hover:text-white transition-colors duration-200"
                    style={{ fontSize: '1.125rem', lineHeight: 1.6, letterSpacing: '-0.01em' }}
                  >
                    {principle}
                  </p>
                </div>
              </RevealWrapper>
            ))}

            {/* Visual accent */}
            <RevealWrapper delay={280} direction="fade">
              <div
                className="mt-10 rounded-2xl p-6 overflow-hidden relative"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Grid dots */}
                <div className="absolute inset-0 dot-grid opacity-10" />
                <div className="relative z-10 space-y-3">
                  {/* Fake code lines */}
                  {[
                    { c: '#60A5FA', w: '65%', text: '// discovery.ts' },
                    { c: '#C3E88D', w: '80%', text: 'const brief = await understand(client)' },
                    { c: '#F78C6C', w: '55%', text: 'const scope = define(brief, goals)' },
                    { c: '#82AAFF', w: '75%', text: 'const product = build(scope)' },
                    { c: '#C792EA', w: '50%', text: 'await launch(product)' },
                  ].map((line, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span
                        className="text-[9px] font-mono truncate"
                        style={{ color: line.c, width: line.w }}
                      >
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
