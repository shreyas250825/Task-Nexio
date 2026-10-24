import { ArrowRight, ArrowDown } from 'lucide-react';

// ─── Valen Labs dark window ───────────────────────────────────────────────────
function ValenLabsWindow() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden card-lift shadow-product"
      style={{ background: '#0A0D14' }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-5 py-3.5 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,68,58,0.7)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,189,46,0.7)' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(40,200,64,0.7)' }} />
        <div
          className="flex-1 mx-4 flex items-center gap-2 h-6 rounded px-3"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ADE80' }} />
          <span
            className="text-[9px] font-mono"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            valenlabs.in
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pt-8 pb-10">
        {/* Navbar */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md" style={{ background: '#2563EB' }} />
            <div className="h-3 w-20 rounded-sm" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <div className="hidden sm:flex items-center gap-5">
            {[52, 44, 56, 40].map((w, i) => (
              <div key={i} className="h-2 rounded" style={{ width: w, background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-20 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.12)' }} />
            <div className="h-8 w-24 rounded-md" style={{ background: '#2563EB' }} />
          </div>
        </div>

        {/* Hero content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{ background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#60A5FA' }} />
              <span className="text-[10px] font-semibold" style={{ color: '#60A5FA', letterSpacing: '0.05em' }}>
                AI & Technology Platform
              </span>
            </div>
            <div className="space-y-2.5">
              <div className="h-9 rounded-md" style={{ width: '88%', background: 'rgba(255,255,255,0.8)' }} />
              <div className="h-9 rounded-md" style={{ width: '70%', background: 'rgba(255,255,255,0.6)' }} />
              <div className="h-9 rounded-md" style={{ width: '52%', background: 'rgba(255,255,255,0.4)' }} />
            </div>
            <div className="space-y-1.5">
              <div className="h-3 rounded" style={{ width: '90%', background: 'rgba(255,255,255,0.14)' }} />
              <div className="h-3 rounded" style={{ width: '72%', background: 'rgba(255,255,255,0.10)' }} />
            </div>
            <div className="flex gap-3 pt-1">
              <div className="h-11 w-32 rounded-md" style={{ background: '#2563EB' }} />
              <div className="h-11 w-28 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
            </div>
          </div>

          {/* Right cards */}
          <div className="hidden md:grid grid-cols-2 gap-3">
            {[
              { label: 'AI Products',  accent: '#2563EB' },
              { label: 'Integrations', accent: '#60A5FA' },
              { label: 'Deployments',  accent: '#3B82F6' },
              { label: 'Platforms',    accent: '#93C5FD' },
            ].map((card) => (
              <div
                key={card.label}
                className="rounded-xl p-4 space-y-3"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="w-8 h-8 rounded-lg" style={{ background: `${card.accent}25` }} />
                <div>
                  <div className="h-5 rounded" style={{ width: '70%', background: `${card.accent}60` }} />
                  <div className="h-2 w-16 rounded mt-2" style={{ background: 'rgba(255,255,255,0.12)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-8 grid grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {['Digital Solutions', 'AI Architecture', 'Production Ready'].map((label) => (
            <div key={label} className="px-5 py-4" style={{ background: '#0A0D14' }}>
              <div className="h-3 w-20 rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <div className="h-2 w-24 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="mt-1.5 text-[8px]" style={{ color: 'rgba(255,255,255,0.2)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Valen Live window ────────────────────────────────────────────────────────
function ValenLiveWindow() {
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden shadow-product-sm card-lift"
      style={{ background: '#FFFFFF', border: '1px solid #E0F2F0' }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5 border-b"
        style={{ borderColor: '#E0F2F0', background: '#F0FDFA' }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,68,58,0.6)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,189,46,0.6)' }} />
        <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(40,200,64,0.6)' }} />
        <div
          className="flex-1 mx-3 h-5 rounded flex items-center gap-1.5 px-2.5"
          style={{ background: 'rgba(0,0,0,0.04)' }}
        >
          <div className="w-1 h-1 rounded-full" style={{ background: '#4ADE80' }} />
          <span className="text-[8px] font-mono" style={{ color: '#8A8A8A' }}>valen.live</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex" style={{ minHeight: 220 }}>
        {/* Sidebar */}
        <div
          className="w-40 border-r p-3 space-y-1 flex-shrink-0"
          style={{ borderColor: '#E0F2F0', background: '#F0FDFA' }}
        >
          <div className="flex items-center gap-2 px-1 mb-3">
            <div className="w-4 h-4 rounded" style={{ background: '#0D9488' }} />
            <div className="h-2.5 w-14 rounded" style={{ background: 'rgba(13,148,136,0.3)' }} />
          </div>
          {[true, false, false, false, false].map((active, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-2.5 py-2 rounded-md"
              style={{ background: active ? 'rgba(13,148,136,0.12)' : 'transparent' }}
            >
              <div className="w-3 h-3 rounded-sm" style={{ background: active ? '#0D9488' : '#D4D4D2' }} />
              <div
                className="h-2 rounded-sm"
                style={{ width: [56, 72, 64, 48, 60][i], background: active ? '#0D9488' : '#D4D4D2', opacity: active ? 1 : 0.6 }}
              />
            </div>
          ))}
        </div>

        {/* Dashboard */}
        <div className="flex-1 p-4 space-y-3 bg-white">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { v: '24',  l: 'Sessions', bg: '#F0FDFA', bd: '#99F6E4', tc: '#0D9488' },
              { v: '7d',  l: 'Streak',   bg: '#EFF6FF', bd: '#BFDBFE', tc: '#2563EB' },
              { v: '84%', l: 'Score',    bg: '#FFFBEB', bd: '#FDE68A', tc: '#D97706' },
            ].map((s) => (
              <div key={s.l} className="rounded-xl p-3" style={{ background: s.bg, border: `1px solid ${s.bd}` }}>
                <div className="text-sm font-bold" style={{ color: s.tc }}>{s.v}</div>
                <div className="text-[8px] mt-0.5" style={{ color: '#8A8A8A' }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Sessions list */}
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#E8E8E6' }}>
            <div className="px-3 py-2 border-b" style={{ borderColor: '#E8E8E6', background: '#F8F8F6' }}>
              <div className="h-2.5 w-24 rounded" style={{ background: '#E2E2E0' }} />
            </div>
            {[90, 76, 83].map((score, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 px-3 py-2.5 border-b last:border-0"
                style={{ borderColor: '#F0EFED' }}
              >
                <div className="w-6 h-6 rounded-lg" style={{ background: `rgba(13,148,136,${0.08 + i * 0.04})` }} />
                <div className="flex-1 space-y-1">
                  <div className="h-2 rounded" style={{ width: `${60 + i * 8}%`, background: '#E2E2E0' }} />
                  <div className="h-1.5 rounded" style={{ width: `${45 + i * 6}%`, background: '#EDEDED' }} />
                </div>
                <div
                  className="text-[9px] font-semibold px-1.5 py-0.5 rounded-md"
                  style={{
                    color:      score >= 80 ? '#0D9488' : '#D97706',
                    background: score >= 80 ? '#F0FDFA' : '#FFFBEB',
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

// ─── Hero section ─────────────────────────────────────────────────────────────
export function Hero() {
  const go = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="relative bg-canvas overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle dot grid */}
      <div
        className="absolute top-0 left-0 right-0 dot-grid pointer-events-none"
        style={{ height: 560, opacity: 0.2 }}
      />
      {/* Fade out dot grid */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: 560, background: 'linear-gradient(180deg, transparent 40%, #FAFAF8 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 md:pt-32 md:pb-20">

        {/* ── Copy ── */}
        <div className="max-w-4xl mx-auto text-center mb-16">

          {/* Eyebrow — explicit colour, no inheritance */}
          <p
            style={{
              fontSize: '0.625rem',
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#8A8A8A',
              marginBottom: '1.5rem',
            }}
          >
            A Valen Labs Product
          </p>

          {/* Headline — DM Serif with system serif fallback */}
          <h1
            className="font-display text-balance"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.035em',
              color: '#0F0F0F',
              marginBottom: '1.25rem',
            }}
          >
            From Vision
            <br />
            <span style={{ color: '#2563EB' }}>to Reality.</span>
          </h1>

          {/* Sub-headline */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: 600,
              letterSpacing: '-0.015em',
              color: '#2D2D2D',
              marginBottom: '1rem',
            }}
          >
            We turn ambitious ideas into impactful digital products.
          </p>

          {/* Body */}
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: '#525252',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
            }}
          >
            From beautifully crafted websites to sophisticated business platforms
            and AI-powered applications — we help businesses transform possibilities
            into products people can use.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            {/* Primary — explicit bg + text colours, always visible */}
            <button
              onClick={() => go('#contact')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#2563EB',
                color: '#FFFFFF',
                borderRadius: '8px',
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
                transition: 'background 0.15s ease, box-shadow 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#1D4ED8';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = '#2563EB';
              }}
            >
              Bring Your Idea to Life
              <ArrowRight size={16} strokeWidth={2.5} />
            </button>

            {/* Secondary */}
            <button
              onClick={() => go('#work')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: '#2D2D2D',
                borderRadius: '8px',
                padding: '0.875rem 1.75rem',
                fontSize: '0.9375rem',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                border: '1px solid #E2E2E0',
                cursor: 'pointer',
                transition: 'border-color 0.15s ease, background 0.15s ease',
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = '#B8B8B8';
                b.style.background = '#F0EFED';
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.borderColor = '#E2E2E0';
                b.style.background = 'transparent';
              }}
            >
              Explore Our Work
              <ArrowDown size={15} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Product windows ── */}
        <div aria-label="Representative previews of live Valen Labs products">
          {/* Valen Labs — main window */}
          <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
            <ValenLabsWindow />

            {/* Valen Live — floating bottom-right on desktop */}
            <div
              className="hidden lg:block absolute"
              style={{ bottom: -28, right: -20, width: 340, zIndex: 10 }}
            >
              <ValenLiveWindow />
            </div>
          </div>

          {/* Mobile — Valen Live below */}
          <div className="mt-6 lg:hidden">
            <ValenLiveWindow />
          </div>

          {/* Caption */}
          <div
            className="flex flex-wrap items-center justify-center gap-5 mt-8 lg:mt-14"
          >
            <a
              href="https://valenlabs.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: '#8A8A8A', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#2563EB'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#8A8A8A'; }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
              valenlabs.in
            </a>
            <a
              href="https://valen.live"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: '#8A8A8A', textDecoration: 'none' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#0D9488'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#8A8A8A'; }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', display: 'inline-block' }} />
              valen.live
            </a>
            <span style={{ fontSize: '0.6875rem', color: '#B8B8B8' }}>
              Representative interface previews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
