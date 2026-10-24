import { PROCESS_STEPS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';

export function Process() {
  return (
    <section id="process" className="py-28 relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <RevealWrapper className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <SectionLabel>Our Process</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            How we work.
          </h2>
          <p className="text-slate-400 text-lg">
            A straightforward process designed for clarity, momentum, and predictable delivery.
          </p>
        </RevealWrapper>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

            <div className="grid grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <RevealWrapper key={step.number} delay={i * 100} className="relative">
                  {/* Node */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-surface-card border border-surface-border flex items-center justify-center relative z-10">
                        <span className="text-lg font-bold font-mono text-brand-400">{step.number}</span>
                      </div>
                      {/* Active glow on first */}
                      {i === 0 && (
                        <div className="absolute inset-0 rounded-full bg-brand-500/10 blur-lg" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="md:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <RevealWrapper key={step.number} delay={i * 80}>
              <div className="flex gap-6">
                {/* Left: number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-surface-card border border-surface-border flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold font-mono text-brand-400">{step.number}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 min-h-[40px] bg-surface-border my-2" />
                  )}
                </div>

                {/* Right: content */}
                <div className={`pb-10 space-y-2 ${i === PROCESS_STEPS.length - 1 ? 'pb-0' : ''}`}>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealWrapper className="text-center mt-20">
          <p className="text-slate-500 text-sm">
            Ready to start?{' '}
            <a
              href="#contact"
              className="text-brand-400 hover:text-brand-300 transition-colors font-medium"
            >
              Let's begin with a conversation.
            </a>
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
