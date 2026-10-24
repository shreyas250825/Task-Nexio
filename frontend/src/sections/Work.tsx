import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';

// ─── Valen Labs large showcase ─────────────────────────────────────────────
function ValenLabsShowcase() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-product card-lift"
      style={{ background: '#0A0D14', minHeight: 500 }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-5 py-3.5 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.07)', background: 'rgba(255,255,255,0.02)' }}
      >
        {['rgba(255,68,58,0.7)', 'rgba(255,189,46,0.7)', 'rgba(40,200,64,0.7)'].map((c, i) => (
          <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div
          className="flex-1 mx-4 h-6 rounded flex items-center gap-2 px-3"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-[10px] font-mono" style={{ color: 'rgba(255,255,255,0.35)' }}>
            valenlabs.in
          </span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-5 h-5 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="w-5 h-5 rounded" style={{ background: 'rgba(255,255,255,0.06)' }} />
        </div>
      </div>

      {/* Page content */}
      <div className="px-8 pt-10 pb-12">
        {/* Nav */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md" style={{ background: '#2563EB' }} />
            <div className="h-3 w-24 rounded" style={{ background: 'rgba(255,255,255,0.25)' }} />
          </div>
          <div className="hidden sm:flex items-center gap-6">
            {[52, 44, 56, 40, 48].map((w, i) => (
              <div key={i} className="h-2 rounded" style={{ width: w, background: 'rgba(255,255,255,0.12)' }} />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-20 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.12)' }} />
            <div className="h-8 w-24 rounded-md" style={{ background: '#2563EB' }} />
          </div>
        </div>

        {/* Hero area */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-[10px] font-semibold tracking-wide" style={{ color: '#60A5FA' }}>
                AI & Technology Platform
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <div className="h-10 rounded-md" style={{ width: '90%', background: 'rgba(255,255,255,0.8)' }} />
              <div className="h-10 rounded-md" style={{ width: '75%', background: 'rgba(255,255,255,0.65)' }} />
              <div className="h-10 rounded-md" style={{ width: '55%', background: 'rgba(255,255,255,0.45)' }} />
            </div>

            {/* Body */}
            <div className="space-y-2">
              <div className="h-3 rounded" style={{ width: '95%', background: 'rgba(255,255,255,0.15)' }} />
              <div className="h-3 rounded" style={{ width: '80%', background: 'rgba(255,255,255,0.12)' }} />
              <div className="h-3 rounded" style={{ width: '65%', background: 'rgba(255,255,255,0.10)' }} />
            </div>

            {/* CTAs */}
            <div className="flex gap-3 pt-2">
              <div className="h-11 w-36 rounded-md" style={{ background: '#2563EB' }} />
              <div className="h-11 w-28 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
            </div>
          </div>

          {/* Right side abstract visual */}
          <div className="hidden md:block">
            <div className="grid grid-cols-2 gap-3">
              {[
                { h: 80, label: 'AI Products', accent: '#2563EB' },
                { h: 60, label: 'Integrations', accent: '#60A5FA' },
                { h: 70, label: 'Deployments', accent: '#3B82F6' },
                { h: 55, label: 'Platforms',   accent: '#93C5FD' },
              ].map((card) => (
                <div
                  key={card.label}
                  className="rounded-xl p-4 space-y-3"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="w-8 h-8 rounded-lg"
                    style={{ background: `${card.accent}25` }}
                  />
                  <div>
                    <div className="h-5 rounded" style={{ width: `${card.h}%`, background: `${card.accent}60` }} />
                    <div className="h-2 w-20 rounded mt-2" style={{ background: 'rgba(255,255,255,0.12)' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="mt-10 grid grid-cols-3 gap-px rounded-xl overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {[
            ['Digital', 'Solutions'],
            ['AI-first', 'Architecture'],
            ['Production', 'Deployments'],
          ].map(([a, b], i) => (
            <div key={i} className="px-5 py-4" style={{ background: '#0A0D14' }}>
              <div className="h-3 w-20 rounded mb-1.5" style={{ background: 'rgba(255,255,255,0.3)' }} />
              <div className="h-2 w-24 rounded" style={{ background: 'rgba(255,255,255,0.12)' }} />
              <div className="mt-2 text-[8px]" style={{ color: 'rgba(255,255,255,0.15)' }}>
                {a} · {b}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Valen Live showcase ───────────────────────────────────────────────────────
function ValenLiveShowcase() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-product card-lift"
      style={{ background: '#FAFFFE', border: '1px solid #E0F2F0', minHeight: 460 }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div className="flex items-center gap-1.5 px-5 py-3 border-b" style={{ borderColor: '#E0F2F0', background: '#F0FDFA' }}>
        {['rgba(255,68,58,0.6)', 'rgba(255,189,46,0.6)', 'rgba(40,200,64,0.6)'].map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <div
          className="flex-1 mx-4 h-5 rounded flex items-center gap-1.5 px-3"
          style={{ background: 'rgba(0,0,0,0.04)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
          <span className="text-[9px] font-mono text-ink-40">valen.live</span>
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-[400px]">
        {/* Sidebar */}
        <div className="w-52 border-r flex-shrink-0 p-4" style={{ borderColor: '#E0F2F0', background: '#F0FDFA' }}>
          {/* Brand */}
          <div className="flex items-center gap-2 mb-6 px-1">
            <div className="w-6 h-6 rounded-md" style={{ background: '#0D9488' }} />
            <div className="h-2.5 w-20 rounded bg-teal-800/20" />
          </div>
          {/* Navigation items */}
          {[
            { label: 'Dashboard',      active: true,  w: 64 },
            { label: 'Interview Prep', active: false, w: 80 },
            { label: 'Code Practice',  active: false, w: 72 },
            { label: 'Assessments',    active: false, w: 68 },
            { label: 'Progress',       active: false, w: 52 },
            { label: 'Resources',      active: false, w: 60 },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg mb-1 cursor-default"
              style={{
                background:   item.active ? 'rgba(13,148,136,0.12)' : 'transparent',
                border:       item.active ? '1px solid rgba(13,148,136,0.2)' : '1px solid transparent',
              }}
            >
              <div
                className="w-3.5 h-3.5 rounded-sm flex-shrink-0"
                style={{ background: item.active ? '#0D9488' : '#C8C8C6' }}
              />
              <div
                className="h-2 rounded-sm"
                style={{
                  width: item.w,
                  background: item.active ? '#0D9488' : '#C8C8C6',
                  opacity: item.active ? 1 : 0.7,
                }}
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-5 space-y-4 overflow-hidden bg-white">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="space-y-1.5">
              <div className="h-2.5 w-28 rounded bg-ink-10" />
              <div className="h-6 w-52 rounded bg-ink-80" />
            </div>
            <div className="flex gap-2">
              <div className="h-8 w-24 rounded-md" style={{ border: '1px solid #E0E0DE' }} />
              <div className="h-8 w-28 rounded-md" style={{ background: '#0D9488' }} />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: '24', l: 'Sessions',    bg: '#F0FDFA', border: '#99F6E4', tc: '#0D9488' },
              { v: '7d', l: 'Day Streak',  bg: '#EFF6FF', border: '#BFDBFE', tc: '#2563EB' },
              { v: '84%',l: 'Avg. Score',  bg: '#FFFBEB', border: '#FDE68A', tc: '#D97706' },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl p-3.5"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div className="text-lg font-bold tracking-tight" style={{ color: s.tc }}>{s.v}</div>
                <div className="text-[9px] mt-0.5 text-ink-40">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Recent sessions */}
          <div className="rounded-xl border overflow-hidden" style={{ borderColor: '#E8E8E6' }}>
            <div className="px-4 py-2.5 border-b bg-ink-5" style={{ borderColor: '#E8E8E6' }}>
              <div className="h-2.5 w-28 rounded bg-ink-20" />
            </div>
            {[
              { score: 90, width: 80 },
              { score: 76, width: 68 },
              { score: 83, width: 74 },
              { score: 68, width: 60 },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 border-b last:border-0"
                style={{ borderColor: '#F0EFED' }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex-shrink-0"
                  style={{ background: `rgba(13,148,136,${0.06 + i * 0.03})` }}
                />
                <div className="flex-1 space-y-1 min-w-0">
                  <div className="h-2 rounded bg-ink-10" style={{ width: `${row.width}%` }} />
                  <div className="h-1.5 rounded bg-ink-10" style={{ width: `${row.width - 15}%`, opacity: 0.6 }} />
                </div>
                <div
                  className="text-[9px] font-semibold px-2 py-1 rounded-md flex-shrink-0 tabular"
                  style={{
                    color:      row.score >= 80 ? '#0D9488' : '#D97706',
                    background: row.score >= 80 ? '#F0FDFA' : '#FFFBEB',
                  }}
                >
                  {row.score}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Work section ─────────────────────────────────────────────────────────────
export function Work() {
  return (
    <section id="work" className="bg-canvas py-28 md:py-36" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <RevealWrapper>
          <div className="mb-20">
            <SectionLabel>Our Work</SectionLabel>
            <h2
              id="work-heading"
              className="mt-4 font-display text-balance text-ink"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
            >
              Real products.{' '}
              <span className="text-ink-40">Real engineering.</span>
            </h2>
            <p className="mt-4 text-lg text-ink-60 max-w-2xl leading-relaxed">
              Our work reflects how we approach technology: understand the problem, design
              the experience, and engineer the product. These are live Valen Labs properties.
            </p>
          </div>
        </RevealWrapper>

        {/* Product 01 — Valen Labs */}
        <RevealWrapper>
          <article className="mb-28">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Window — 3 cols */}
              <div className="lg:col-span-3">
                <ValenLabsShowcase />
              </div>

              {/* Copy — 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-display tabular"
                    style={{ fontSize: '4rem', lineHeight: 1, letterSpacing: '-0.05em', color: '#E2E2E0' }}
                  >
                    01
                  </span>
                  <div className="h-px flex-1 bg-ink-10" />
                </div>
                <div>
                  <p className="text-2xs font-semibold tracking-widest uppercase text-blue-600 mb-2">
                    {PRODUCTS[0].category}
                  </p>
                  <h3
                    className="font-display text-ink"
                    style={{ fontSize: '2.25rem', lineHeight: 1.15, letterSpacing: '-0.03em' }}
                  >
                    {PRODUCTS[0].title}
                  </h3>
                </div>
                <p className="text-ink-60 leading-relaxed">{PRODUCTS[0].description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-ink-20 border border-ink-10 rounded px-2 py-1">
                    {PRODUCTS[0].displayUrl}
                  </span>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Live
                  </span>
                </div>
                <a
                  href={PRODUCTS[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group transition-colors"
                >
                  {PRODUCTS[0].cta}
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </article>
        </RevealWrapper>

        {/* Divider */}
        <div className="divider-x mb-28" />

        {/* Product 02 — Valen Live */}
        <RevealWrapper>
          <article>
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center lg:grid-flow-dense">
              {/* Copy — 2 cols, starts col 1 on desktop */}
              <div className="lg:col-span-2 lg:col-start-1 space-y-6">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-display tabular"
                    style={{ fontSize: '4rem', lineHeight: 1, letterSpacing: '-0.05em', color: '#E2E2E0' }}
                  >
                    02
                  </span>
                  <div className="h-px flex-1 bg-ink-10" />
                </div>
                <div>
                  <p className="text-2xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0D9488' }}>
                    {PRODUCTS[1].category}
                  </p>
                  <h3
                    className="font-display text-ink"
                    style={{ fontSize: '2.25rem', lineHeight: 1.15, letterSpacing: '-0.03em' }}
                  >
                    {PRODUCTS[1].title}
                  </h3>
                </div>
                <p className="text-ink-60 leading-relaxed">{PRODUCTS[1].description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-ink-20 border border-ink-10 rounded px-2 py-1">
                    {PRODUCTS[1].displayUrl}
                  </span>
                  <span className="text-xs text-green-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                    Live
                  </span>
                </div>
                <a
                  href={PRODUCTS[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold group transition-colors"
                  style={{ color: '#0D9488' }}
                >
                  {PRODUCTS[1].cta}
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Window — 3 cols, starts col 3 */}
              <div className="lg:col-span-3 lg:col-start-3">
                <ValenLiveShowcase />
              </div>
            </div>
          </article>
        </RevealWrapper>
      </div>
    </section>
  );
}
