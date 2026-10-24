import { Monitor, LayoutDashboard, Cpu, Code2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';

const iconMap = { Monitor, LayoutDashboard, Cpu, Code2 };

// Per-service interface previews
function ServiceVisual({ id }: { id: string }) {
  if (id === 'websites') {
    return (
      <div className="rounded-lg overflow-hidden border border-surface-border bg-midnight-950/60 p-4 space-y-2" aria-hidden="true">
        <div className="h-2 w-1/2 rounded bg-brand-700/50" />
        <div className="h-1.5 w-3/4 rounded bg-slate-700/50" />
        <div className="h-1.5 w-2/3 rounded bg-slate-700/40" />
        <div className="mt-3 flex gap-2">
          <div className="h-6 w-16 rounded bg-brand-600/50 text-[8px] flex items-center justify-center text-brand-300 font-mono">CTA</div>
        </div>
        <div className="h-12 w-full rounded bg-gradient-to-br from-brand-900/40 to-transparent border border-surface-border mt-2" />
      </div>
    );
  }
  if (id === 'portals') {
    return (
      <div className="rounded-lg border border-surface-border bg-midnight-950/60 p-3 space-y-2" aria-hidden="true">
        <div className="flex gap-2">
          <div className="w-14 space-y-1.5">
            {['Nav', 'Nav', 'Nav'].map((_, i) => (
              <div key={i} className={`h-4 rounded text-[7px] flex items-center justify-center font-mono ${i === 0 ? 'bg-brand-700/50 text-brand-300' : 'bg-surface-border/40 text-slate-600'}`}>
                {['Home', 'Data', 'Logs'][i]}
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-1.5">
            <div className="h-6 rounded bg-surface-border/50 flex gap-1 items-center px-2">
              {[60, 45, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-brand-600/40" style={{ height: `${h * 0.06}rem` }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1">
              <div className="h-5 rounded bg-surface-border/40" />
              <div className="h-5 rounded bg-surface-border/40" />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (id === 'ai') {
    return (
      <div className="rounded-lg border border-surface-border bg-midnight-950/60 p-3 space-y-2" aria-hidden="true">
        <div className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full bg-brand-700/50 flex-shrink-0 mt-0.5" />
          <div className="flex-1 space-y-1">
            <div className="h-2 w-full rounded bg-slate-700/50" />
            <div className="h-2 w-3/4 rounded bg-slate-700/40" />
          </div>
        </div>
        <div className="flex items-start gap-2 justify-end">
          <div className="flex-1 space-y-1 text-right">
            <div className="h-2 w-full rounded bg-brand-700/40" />
            <div className="h-2 w-2/3 ml-auto rounded bg-brand-700/30" />
          </div>
          <div className="w-5 h-5 rounded-full bg-violet-700/50 flex-shrink-0 mt-0.5" />
        </div>
        <div className="flex items-center gap-1.5 border border-surface-border rounded px-2 py-1">
          <div className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
          <div className="h-1.5 flex-1 rounded bg-surface-border/60" />
        </div>
      </div>
    );
  }
  // software/mvp
  return (
    <div className="rounded-lg border border-surface-border bg-midnight-950/60 p-3" aria-hidden="true">
      <div className="space-y-1.5 font-mono text-[9px]">
        {[
          { text: 'const app = express()', color: 'text-brand-400' },
          { text: "app.get('/api/v1/...', auth,", color: 'text-slate-500' },
          { text: '  async (req, res) => {', color: 'text-slate-500' },
          { text: '  const data = await db.query()', color: 'text-violet-400' },
          { text: '  res.json({ data })', color: 'text-green-400/70' },
          { text: '})', color: 'text-slate-500' },
        ].map((line, i) => (
          <div key={i} className={`${line.color}`}>{line.text}</div>
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-surface-border" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <RevealWrapper className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <SectionLabel>What We Build</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            From idea to deployed product.
          </h2>
          <p className="text-slate-400 text-lg">
            Four core practice areas, each focused on delivering outcomes your business can actually use.
          </p>
        </RevealWrapper>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <RevealWrapper key={service.id} delay={i * 80}>
                <article className="group relative h-full rounded-2xl border border-surface-border bg-surface-card p-8 hover:border-brand-800/60 hover:bg-surface-hover transition-all duration-300 overflow-hidden">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at 30% 20%, rgba(99,102,241,0.06) 0%, transparent 60%)' }}
                  />

                  <div className="relative z-10 flex flex-col h-full gap-6">
                    <div className="flex items-start justify-between gap-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-brand-950 border border-brand-800/50 flex items-center justify-center flex-shrink-0">
                        <Icon size={22} className="text-brand-400" />
                      </div>
                      {/* Outcome badge */}
                      <span className="text-[10px] font-mono text-slate-600 border border-surface-border rounded-full px-2 py-0.5 whitespace-nowrap">
                        {service.outcome}
                      </span>
                    </div>

                    <div className="space-y-3 flex-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Interface preview */}
                    <ServiceVisual id={service.id} />

                    {/* Learn more link */}
                    <a
                      href="#contact"
                      className="flex items-center gap-1.5 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors group/link mt-1"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Discuss this service
                      <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </article>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
