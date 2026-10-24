import { Target, Layers, Zap, MessageSquare } from 'lucide-react';
import { DIFFERENTIATORS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';

const iconMap = { Target, Layers, Zap, MessageSquare };

export function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left copy */}
          <RevealWrapper className="space-y-6">
            <SectionLabel>Why Task Nexio</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
              Good technology should move your business forward.
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              We are a focused digital product studio — not a large agency with layers of account managers, and not a
              freelancer juggling dozens of clients. Just a small team that cares about delivering work that genuinely helps businesses.
            </p>
            <p className="text-slate-500 leading-relaxed">
              Task Nexio is a new studio, and we are selective about the projects we take on. That means you work
              directly with the people building your product, from the first conversation through to launch.
            </p>

            {/* Studio identity */}
            <div className="mt-6 p-6 rounded-xl border border-surface-border bg-surface-card space-y-3">
              <div className="text-xs font-semibold tracking-widest uppercase text-slate-600">Studio identity</div>
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                  <span className="text-sm text-slate-300">Task Nexio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="text-sm text-slate-500">A digital product studio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                  <span className="text-sm text-slate-500">By Valen Labs Private Limited</span>
                </div>
              </div>
            </div>
          </RevealWrapper>

          {/* Right — differentiators */}
          <div className="space-y-5">
            {DIFFERENTIATORS.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <RevealWrapper key={item.title} delay={i * 80}>
                  <div className="group flex gap-5 p-6 rounded-xl border border-surface-border bg-surface-card hover:border-brand-800/50 transition-all duration-200">
                    <div className="w-10 h-10 rounded-lg bg-brand-950 border border-brand-800/40 flex items-center justify-center flex-shrink-0 group-hover:border-brand-700/60 transition-colors">
                      <Icon size={18} className="text-brand-400" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </RevealWrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
