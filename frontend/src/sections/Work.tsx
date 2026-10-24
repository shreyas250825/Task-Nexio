import { WORK_ITEMS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';
import { Tag } from 'lucide-react';

// Per-project mockup visuals
function WorkVisual({ index, accentColor }: { index: number; accentColor: string }) {
  const accent = accentColor;

  if (index === 0) {
    // Website mockup
    return (
      <div className="w-full aspect-video rounded-xl border border-surface-border overflow-hidden bg-midnight-950 relative" aria-hidden="true">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-border bg-surface-card">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
          <div className="flex-1 mx-2 h-3.5 rounded bg-surface-border/50" />
        </div>
        {/* Page layout */}
        <div className="p-4 space-y-3">
          {/* Hero-like area */}
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-2">
              <div className="h-4 w-3/4 rounded" style={{ background: `${accent}40` }} />
              <div className="h-2.5 w-full rounded bg-slate-800/60" />
              <div className="h-2.5 w-5/6 rounded bg-slate-800/50" />
              <div className="h-7 w-24 rounded-lg mt-1" style={{ background: `${accent}60` }} />
            </div>
            <div className="w-20 h-16 rounded-lg bg-gradient-to-br border border-surface-border"
              style={{ background: `linear-gradient(135deg, ${accent}20, transparent)` }} />
          </div>
          {/* Nav-like */}
          <div className="flex gap-2 pt-1">
            {[40, 52, 36, 44].map((w, i) => (
              <div key={i} className="h-2 rounded bg-slate-800/60" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>
        {/* Accent glow */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: `linear-gradient(to top, ${accent}08, transparent)` }} />
      </div>
    );
  }

  if (index === 1) {
    // Dashboard mockup
    return (
      <div className="w-full aspect-video rounded-xl border border-surface-border overflow-hidden bg-midnight-950 relative" aria-hidden="true">
        <div className="h-full flex">
          {/* Sidebar */}
          <div className="w-16 border-r border-surface-border bg-surface-card flex flex-col gap-2 p-2 pt-4">
            {[1,1,1,1,1].map((_, i) => (
              <div key={i} className={`h-6 rounded flex items-center justify-center ${i===0 ? 'bg-brand-700/40' : ''}`}>
                <div className={`w-3 h-3 rounded-sm ${i===0 ? 'bg-brand-400/70' : 'bg-slate-700/60'}`} />
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="flex-1 p-4 space-y-3">
            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-2">
              {['28', '94%', '12'].map((v, i) => (
                <div key={i} className="rounded-lg border border-surface-border p-2 bg-surface-card">
                  <div className="text-[10px] font-bold" style={{ color: accent }}>{v}</div>
                  <div className="h-1.5 w-8 rounded bg-slate-800/60 mt-1" />
                </div>
              ))}
            </div>
            {/* Chart area */}
            <div className="rounded-lg border border-surface-border p-2 bg-surface-card h-12 flex items-end gap-1">
              {[55, 70, 45, 80, 60, 90, 65].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{ height: `${h * 0.9}%`, background: `${accent}${40 + i * 8}` }}
                />
              ))}
            </div>
            {/* Table rows */}
            {[1,2].map(r => (
              <div key={r} className="flex gap-2 items-center">
                <div className="h-2 flex-1 rounded bg-slate-800/50" />
                <div className="h-2 w-10 rounded bg-slate-800/40" />
                <div className="h-2 w-8 rounded" style={{ background: `${accent}40` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // index === 2: AI application
  return (
    <div className="w-full aspect-video rounded-xl border border-surface-border overflow-hidden bg-midnight-950 relative" aria-hidden="true">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-surface-border bg-surface-card">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: accent }} />
          <div className="h-2 w-20 rounded bg-slate-700/60" />
          <div className="flex-1" />
          <div className="h-5 w-14 rounded-full border text-[8px] flex items-center justify-center font-mono"
            style={{ borderColor: `${accent}50`, color: accent }}>
            AI Active
          </div>
        </div>
        {/* Chat area */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden">
          {/* Document */}
          <div className="flex gap-2">
            <div className="flex-1 rounded-lg border border-surface-border p-2 space-y-1 bg-surface-card/50">
              {[1,2,3].map(i => (
                <div key={i} className="h-1.5 rounded bg-slate-800/60" style={{ width: `${90-i*15}%` }} />
              ))}
            </div>
          </div>
          {/* AI response bubble */}
          <div className="flex items-start gap-2 justify-end">
            <div className="rounded-xl rounded-tr-sm px-3 py-2 max-w-[70%] space-y-1"
              style={{ background: `${accent}20`, border: `1px solid ${accent}30` }}>
              <div className="h-1.5 rounded bg-slate-600/50 w-full" />
              <div className="h-1.5 rounded bg-slate-600/40 w-3/4" />
            </div>
          </div>
          {/* Processing indicator */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[0.1, 0.2, 0.3].map((d, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full animate-bounce"
                  style={{ background: accent, animationDelay: `${d}s` }} />
              ))}
            </div>
            <div className="h-1.5 w-16 rounded bg-slate-800/40" />
          </div>
        </div>
        {/* Input */}
        <div className="px-4 pb-3">
          <div className="flex gap-2 items-center border border-surface-border rounded-lg px-3 py-2 bg-surface-card">
            <div className="flex-1 h-2 rounded bg-slate-800/50" />
            <div className="w-6 h-5 rounded flex items-center justify-center"
              style={{ background: `${accent}50` }}>
              <div className="w-2 h-2 border border-white/40 rounded-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-28 relative">
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-surface-border" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <RevealWrapper className="max-w-2xl mb-16 space-y-4">
          <SectionLabel>Our Work</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Built around the problem.{' '}
            <span className="text-gradient">Designed for the outcome.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            These are conceptual demonstrations of what we build. Real client work is introduced as we take on projects.
          </p>
        </RevealWrapper>

        {/* Work items */}
        <div className="space-y-12">
          {WORK_ITEMS.map((item, i) => (
            <RevealWrapper key={i} delay={i * 100}>
              <article className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Visual — alternates left/right */}
                <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <WorkVisual index={i} accentColor={item.accentColor} />
                </div>

                {/* Copy */}
                <div className={`space-y-5 ${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  {/* Category + note */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border"
                      style={{ color: item.accentColor, borderColor: `${item.accentColor}40`, background: `${item.accentColor}10` }}
                    >
                      <Tag size={10} />
                      {item.category}
                    </span>
                    <span className="text-[10px] text-slate-600 border border-surface-border rounded-full px-2 py-0.5">
                      {item.note}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-surface-card border border-surface-border text-slate-500 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors"
                  >
                    Discuss a similar project →
                  </a>
                </div>
              </article>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
