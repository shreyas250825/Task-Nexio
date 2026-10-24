import { ArrowRight, ArrowDown } from 'lucide-react';

// ─── Valen Labs dark-themed product interface ─────────────────────────────────
function ValenLabsWindow() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden card-lift shadow-product"
      style={{ background: '#0A0D14' }}
      aria-hidden="true"
    >
      {/* Subtle top chrome */}
      <div className="flex items-center gap-1.5 px-5 py-3.5 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }} />
        <div className="flex-1 mx-4 flex items-center gap-2 h-6 rounded px-3" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <span className="text-[9px] font-mono" style={{ color: 'rgba(255,255,255,0.3)' }}>valenlabs.in</span>
        </div>
      </div>

      {/* Page body */}
      <div className="px-6 pt-8 pb-10">
        {/* Nav */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md" style={{ background: '#2563EB' }} />
            <div className="h-3 w-20 rounded-sm" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <div className="hidden sm:flex items-center gap-5">
            {[52, 44, 56, 40].map((w, i) => (
              <div key={i} className="h-2 rounded-sm" style={{ width: w, background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-7 w-16 rounded" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }} />
            <div className="h-7 w-20 rounded" style={{ background: '#2563EB' }} />
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-lg space-y-5 mb-10">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full" style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-[10px] font-medium" style={{ color: '#60A5FA' }}>AI & Engineering Platform</span>
          </div>
          {/* Headline bars */}
          <div className="space-y-3">
            <div className="h-9 rounded" style={{ width: '85%', background: 'rgba(255,255,255,0.75)' }} />
            <div className="h-9 rounded" style={{ width: '68%', background: 'rgba(255,255,255,0.6)' }} />
          </div>
          {/* Body text */}
          <div className="space-y-1.5">
            <div className="h-3 rounded" style={{ width: '92%', background: 'rgba(255,255,255,0.15)' }} />
            <div className="h-3 rounded" style={{ width: '76%', background: 'rgba(255,255,255,0.12)' }} />
          </div>
          {/* CTAs */}
          <div className="flex gap-3 pt-1">
            <div className="h-10 w-32 rounded-md" style={{ background: '#2563EB' }} />
            <div className="h-10 w-28 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
          </div>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          {[
            { label: 'AI Products', sub: 'Built & shipped' },
            { label: 'Integrations', sub: 'Enterprise APIs' },
            { label: 'Platforms', sub: 'Production-ready' },
          ].map((f) => (
            <div key={f.label} className="rounded-xl p-4 space-y-2" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="h-2.5 w-16 rounded-sm" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <div className="h-2 w-20 rounded-sm" style={{ background: 'rgba(255,255,255,0.12)' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Valen Live platform window ───────────────────────────────────────────────
function ValenLiveWindow() {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-product-sm card-lift"
      style={{ background: '#FFFFFF', border: '1px solid #E8E8E6' }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-ink-10 bg-ink-5">
        <div className="w-2 h-2 rounded-full bg-ink-20" />
        <div className="w-2 h-2 rounded-full bg-ink-20" />
        <div className="w-2 h-2 rounded-full bg-ink-20" />
        <div className="flex-1 mx-3 flex items-center gap-1.5 h-5 rounded px-2.5" style={{ background: 'rgba(0,0,0,0.04)' }}>
          <div className="w-1 h-1 rounded-full bg-green-400" />
          <span className="text-[8px] font-mono text-ink-40">valen.live</span>
        </div>
      </div>

      {/* App UI */}
      <div className="flex" style={{ minHeight: 240 }}>
        {/* Sidebar */}
        <div className="w-40 border-r border-ink-10 bg-ink-5 p-3 space-y-1 flex-shrink-0">
          <div className="flex items-center gap-2 px-2 py-1.5 mb-3">
            <div className="w-4 h-4 rounded" style={{ background: '#0D9488' }} />
            <div className="h-2 w-14 rounded-sm bg-ink-20" />
          </div>
          {[
            { w: 56, active: true },
            { w: 72, active: false },
            { w: 64, active: false },
            { w: 48, active: false },
            { w: 60, active: false },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2.5 py-2 rounded-md"
              style={{ background: item.active ? 'rgba(13,148,136,0.1)' : 'transparent' }}
            >
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ background: item.active ? '#0D9488' : '#D4D4D2' }}
              />
              <div
                className="h-2 rounded-sm"
                style={{ width: item.w, background: item.active ? '#0D9488' : '#D4D4D2', opacity: item.active ? 1 : 0.6 }}
              />
            </div>
          ))}
        </div>

        {/* Main dashboard */}
        <div className="flex-1 p-4 space-y-3 overflow-hidden">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: '24', lbl: 'Sessions', bg: 'rgba(13,148,136,0.07)', border: 'rgba(13,148,136,0.2)', c: '#0D9488' },
              { val: '7d', lbl: 'Streak',   bg: 'rgba(37,99,235,0.07)', border: 'rgba(37,99,235,0.2)',  c: '#2563EB' },
              { val: '84%',lbl: 'Score',    bg: 'rgba(245,158,11,0.07)',border: 'rgba(245,158,11,0.2)', c: '#D97706' },
            ].map((s) => (
              <div key={s.lbl} className="rounded-xl p-3" style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                <div className="text-sm font-bold" style={{ color: s.c }}>{s.val}</div>
                <div className="text-[8px] mt-0.5 text-ink-40">{s.lbl}</div>
              </div>
            ))}
          </div>

          {/* Activity list */}
          <div className="rounded-xl border border-ink-10 bg-white overflow-hidden">
            <div className="px-3 py-2 border-b border-ink-10">
              <div className="h-2.5 w-24 rounded-sm bg-ink-20" />
            </div>
            {[90, 76, 83, 68].map((score, i) => (
              <div key={i} className="flex items-center gap-2.5 px-3 py-2.5 border-b border-ink-10 last:border-0">
                <div className="w-6 h-6 rounded-lg flex-shrink-0" style={{ background: `rgba(13,148,136,${0.08 + i * 0.04})` }} />
                <div className="flex-1 space-y-1 min-w-0">
                  <div className="h-2 rounded-sm bg-ink-10" style={{ width: `${55 + i * 8}%` }} />
                  <div className="h-1.5 rounded-sm bg-ink-10" style={{ width: `${40 + i * 6}%`, opacity: 0.7 }} />
                </div>
                <div
                  className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md flex-shrink-0"
                  style={{
                    color:      score >= 80 ? '#0D9488' : '#D97706',
                    background: score >= 80 ? 'rgba(13,148,136,0.1)' : 'rgba(245,158,11,0.1)',
                  }}
                >
                  {score}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative bg-canvas overflow-hidden"
      aria-label="Hero"
    >
      {/* Very subtle dot grid — top area only */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] dot-grid pointer-events-none"
        style={{ opacity: 0.25 }}
      />
      {/* Gradient fade over dot grid */}
      <div
        className="absolute top-0 left-0 right-0 h-[600px] pointer-events-none"
        style={{ background: 'linear-gradient(180deg, transparent 40%, #FAFAF8 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-16 md:pt-36 md:pb-20">

        {/* ── COPY ── */}
        <div className="max-w-4xl mx-auto text-center">

          {/* Eyebrow */}
          <p
            className="text-2xs font-semibold tracking-widest uppercase text-ink-40 mb-6 animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            A Valen Labs Product
          </p>

          {/* Headline — serif display */}
          <h1
            className="font-display text-balance animate-fade-up"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#0F0F0F',
              animationDelay: '80ms',
            }}
          >
            From Vision
            <br />
            <span style={{ color: '#2563EB' }}>to Reality.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="mt-6 text-xl md:text-2xl font-semibold text-ink-80 tracking-snug animate-fade-up"
            style={{ animationDelay: '160ms' }}
          >
            We turn ambitious ideas into impactful digital products.
          </p>

          {/* Body */}
          <p
            className="mt-4 text-base md:text-lg text-ink-60 leading-relaxed max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: '220ms' }}
          >
            From beautifully crafted websites to sophisticated business platforms and
            AI-powered applications — we help businesses transform possibilities into
            products people can use.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            {/* Primary — high contrast, always readable */}
            <button
              onClick={() => go('#contact')}
              className="inline-flex items-center gap-2 bg-blue-600 text-white rounded-md px-7 py-3.5 text-[0.9375rem] font-medium tracking-snug shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Bring Your Idea to Life
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>

            {/* Secondary */}
            <button
              onClick={() => go('#work')}
              className="inline-flex items-center gap-2 bg-transparent text-ink border border-ink-10 rounded-md px-7 py-3.5 text-[0.9375rem] font-medium tracking-snug hover:bg-ink-5 hover:border-ink-20 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Explore Our Work
              <ArrowDown size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── PRODUCT WINDOWS ── */}
        <div
          className="mt-20 animate-fade-up"
          style={{ animationDelay: '420ms' }}
          aria-label="Representative previews of live Valen Labs products"
        >
          {/* Stacked asymmetric layout */}
          <div className="relative">
            {/* Valen Labs — full width, prominent */}
            <div className="mx-auto" style={{ maxWidth: 900 }}>
              <ValenLabsWindow />
            </div>

            {/* Valen Live — overlapping, offset right */}
            <div
              className="absolute hidden lg:block"
              style={{ bottom: -32, right: -16, width: 340 }}
            >
              <ValenLiveWindow />
            </div>
          </div>

          {/* Mobile: show Valen Live below */}
          <div className="mt-6 lg:hidden">
            <ValenLiveWindow />
          </div>

          {/* Caption */}
          <div className="mt-6 lg:mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://valenlabs.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-40 hover:text-blue-600 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              valenlabs.in
            </a>
            <a
              href="https://valen.live"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-ink-40 hover:text-teal-600 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              valen.live
            </a>
            <span className="text-xs text-ink-20">Representative interface previews · not actual screenshots</span>
          </div>
        </div>
      </div>
    </section>
  );
}
