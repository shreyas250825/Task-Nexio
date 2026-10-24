import { PROCESS_STEPS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

export function Process() {
  return (
    <section id="process" className="bg-canvas py-28 md:py-36" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <RevealWrapper className="mb-20 max-w-xl">
          <p className="text-2xs font-semibold tracking-widest uppercase text-ink-40 mb-4">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="font-display text-ink text-balance"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
          >
            A clear path from idea to launch.
          </h2>
          <p className="mt-4 text-ink-60 leading-relaxed text-lg">
            Four stages. Each one deliberate.
          </p>
        </RevealWrapper>

        {/* Desktop — horizontal progression */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connector track */}
            <div
              className="absolute left-[calc(2rem)] right-[calc(2rem)] top-10"
              style={{ height: 1, background: 'linear-gradient(90deg, #E2E2E0 0%, #2563EB 100%)' }}
            />

            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <RevealWrapper key={step.number} delay={i * 100}>
                  <div className="flex flex-col items-start">
                    {/* Node */}
                    <div className="relative z-10 mb-8">
                      <div
                        className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
                        style={{
                          background: i === 0 ? '#2563EB' : 'white',
                          border: `1px solid ${i === 0 ? '#2563EB' : '#E2E2E0'}`,
                          boxShadow: i === 0 ? '0 0 0 4px rgba(37,99,235,0.1)' : '0 2px 8px rgba(0,0,0,0.06)',
                        }}
                      >
                        <span
                          className="font-mono text-xs tabular"
                          style={{ color: i === 0 ? 'white' : '#A3A3A3', letterSpacing: '0.05em' }}
                        >
                          {step.number}
                        </span>
                        <div
                          className="h-px w-6 my-1"
                          style={{ background: i === 0 ? 'rgba(255,255,255,0.4)' : '#E2E2E0' }}
                        />
                        <span
                          className="text-[8px] font-medium"
                          style={{ color: i === 0 ? 'rgba(255,255,255,0.8)' : '#737373' }}
                        >
                          {step.title}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3
                        className="font-semibold text-ink"
                        style={{ fontSize: '1.0625rem', letterSpacing: '-0.015em' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-ink-60 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile — vertical */}
        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <RevealWrapper key={step.number} delay={i * 80}>
              <div className="flex gap-5">
                {/* Left track */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: i === 0 ? '#2563EB' : 'white',
                      border: `1px solid ${i === 0 ? '#2563EB' : '#E2E2E0'}`,
                      boxShadow: i === 0 ? '0 0 0 3px rgba(37,99,235,0.1)' : '0 2px 6px rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      className="font-mono text-xs tabular"
                      style={{ color: i === 0 ? 'white' : '#A3A3A3' }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[40px] my-3" style={{ background: '#E2E2E0' }} />
                  )}
                </div>
                {/* Content */}
                <div className="pb-10 space-y-1.5">
                  <h3 className="font-semibold text-ink" style={{ letterSpacing: '-0.015em' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-60 leading-relaxed">{step.body}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom link */}
        <RevealWrapper className="mt-16 text-center">
          <p className="text-ink-40 text-sm">
            Ready to start?{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 font-medium hover:underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
            >
              Tell us about your project →
            </button>
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
