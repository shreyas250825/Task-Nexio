import { ArrowUpRight, ArrowDown } from 'lucide-react';

const INK     = '#171717';
const BLUE    = '#294FFF';
const MUTED   = '#737373';
const FAINT   = '#A0A0A0';
const IVORY   = '#F6F3EC';
const CHART   = '#D6FF66';
const RULE    = '#D8D4CC';

/* ─── Valen Labs dark window ───────────────────────────────────────── */
function ValenLabsWindow() {
  return (
    <div
      className="bracket-frame card-lift"
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        background: '#0C0E17',
        boxShadow: '0 24px 64px rgba(0,0,0,0.22), 0 4px 16px rgba(0,0,0,0.12)',
      }}
      aria-hidden="true"
    >
      {/* Chrome bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,68,58,0.75)' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,189,46,0.75)' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(40,200,64,0.75)' }} />
        <div style={{ flex: 1, marginLeft: 8, height: 22, borderRadius: 4, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>valenlabs.in</span>
        </div>
      </div>

      {/* Page */}
      <div style={{ padding: '20px 22px 24px' }}>
        {/* Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 22, height: 22, borderRadius: 5, background: BLUE }} />
            <div style={{ height: 10, width: 72, borderRadius: 3, background: 'rgba(255,255,255,0.22)' }} />
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[48, 38, 52, 36].map((w, i) => (
              <div key={i} style={{ height: 8, width: w, borderRadius: 3, background: 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
          <div style={{ height: 28, width: 80, borderRadius: 5, background: BLUE }} />
        </div>

        {/* Hero zone */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.6fr', gap: 16, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {/* Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 10px', borderRadius: 20, background: 'rgba(41,79,255,0.15)', border: '1px solid rgba(41,79,255,0.3)', width: 'fit-content' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B86FF' }} />
              <span style={{ fontSize: 9, fontWeight: 600, color: '#6B86FF', letterSpacing: '0.05em' }}>AI & Technology</span>
            </div>
            <div style={{ height: 28, width: '88%', borderRadius: 4, background: 'rgba(255,255,255,0.75)' }} />
            <div style={{ height: 28, width: '65%', borderRadius: 4, background: 'rgba(255,255,255,0.55)' }} />
            <div style={{ height: 28, width: '48%', borderRadius: 4, background: 'rgba(255,255,255,0.35)' }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
              <div style={{ height: 10, width: '90%', borderRadius: 3, background: 'rgba(255,255,255,0.12)' }} />
            </div>
            <div style={{ height: 10, width: '72%', borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <div style={{ height: 32, width: 100, borderRadius: 5, background: BLUE }} />
              <div style={{ height: 32, width: 80, borderRadius: 5, border: '1px solid rgba(255,255,255,0.15)' }} />
            </div>
          </div>
          {/* Right cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[BLUE, '#6B86FF', '#4F6FFF'].map((c, i) => (
              <div key={i} style={{ borderRadius: 8, padding: '10px 12px', background: `${c}18`, border: `1px solid ${c}30` }}>
                <div style={{ height: 8, width: '70%', borderRadius: 3, background: `${c}80`, marginBottom: 5 }} />
                <div style={{ height: 6, width: '55%', borderRadius: 3, background: `${c}40` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Feature strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginTop: 16, background: 'rgba(255,255,255,0.05)', borderRadius: 6, overflow: 'hidden' }}>
          {['AI Products', 'Integrations', 'Platforms'].map((label) => (
            <div key={label} style={{ padding: '10px 12px', background: '#0C0E17' }}>
              <div style={{ height: 9, width: '70%', borderRadius: 3, background: 'rgba(255,255,255,0.28)', marginBottom: 4 }} />
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.2)', fontFamily: 'monospace' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Valen Live light window ──────────────────────────────────────── */
function ValenLiveWindow() {
  return (
    <div
      style={{
        borderRadius: 10,
        overflow: 'hidden',
        background: '#FAFFFE',
        boxShadow: '0 12px 40px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)',
        border: '1px solid #E0F2F0',
      }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#F0FDFA', borderBottom: '1px solid #E0F2F0' }}>
        {['rgba(255,68,58,0.6)', 'rgba(255,189,46,0.6)', 'rgba(40,200,64,0.6)'].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ flex: 1, marginLeft: 6, height: 18, borderRadius: 3, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 4 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ADE80' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 8, color: '#737373' }}>valen.live</span>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: '12px 14px 8px' }}>
        {[
          { v: '24', l: 'Sessions', bg: '#F0FDFA', bd: '#99F6E4', c: '#0D9488' },
          { v: '7d', l: 'Streak',   bg: '#EFF6FF', bd: '#BFDBFE', c: '#294FFF' },
          { v: '84%',l: 'Score',    bg: '#FFFBEB', bd: '#FDE68A', c: '#D97706' },
        ].map((s) => (
          <div key={s.l} style={{ borderRadius: 6, padding: '8px 10px', background: s.bg, border: `1px solid ${s.bd}` }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: s.c, fontFamily: 'Inter, sans-serif' }}>{s.v}</div>
            <div style={{ fontSize: 7, color: '#737373', marginTop: 2 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Activity list */}
      <div style={{ margin: '0 14px 14px', borderRadius: 6, border: '1px solid #E8E8E6', overflow: 'hidden', background: '#FFF' }}>
        {[90, 76, 83].map((score, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderBottom: i < 2 ? '1px solid #F4F4F2' : 'none' }}>
            <div style={{ width: 22, height: 22, borderRadius: 5, background: `rgba(13,148,136,${0.08 + i * 0.04})`, flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ height: 7, borderRadius: 3, background: '#E8E8E6', width: `${60 + i * 10}%`, marginBottom: 3 }} />
              <div style={{ height: 5, borderRadius: 3, background: '#F0EFED', width: `${45 + i * 7}%` }} />
            </div>
            <div style={{ fontSize: 8, fontWeight: 700, padding: '2px 5px', borderRadius: 3, color: score >= 80 ? '#0D9488' : '#D97706', background: score >= 80 ? '#F0FDFA' : '#FFFBEB', fontFamily: 'monospace' }}>
              {score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────── */
export function Hero() {
  const go = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" aria-label="Hero" style={{ background: IVORY, overflow: 'hidden', position: 'relative' }}>

      {/* Thin top accent line — brand motif */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${BLUE} 0%, ${CHART} 100%)` }} />

      <div className="container" style={{ paddingTop: 'clamp(6rem, 12vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>

        {/* ── Desktop: asymmetric two-column ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }} className="hero-grid">

          {/* Left — copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 24, height: 3, background: CHART, borderRadius: 9999 }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>
                A Valen Labs Product
              </span>
            </div>

            {/* Headline — Playfair Display */}
            <h1 className="text-hero" style={{ margin: 0 }}>
              From Vision<br />
              <em style={{ fontStyle: 'italic', color: BLUE }}>to Reality.</em>
            </h1>

            {/* Supporting line */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: 600, color: INK, margin: 0, letterSpacing: '-0.015em' }}>
              From Ideas to Impact.
            </p>

            {/* Body */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)', lineHeight: 1.7, color: '#525252', margin: 0, maxWidth: 460 }}>
              We transform ambitious business ideas into beautifully designed websites,
              custom applications, and intelligent digital products.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
              <button className="btn-primary" onClick={() => go('#contact')} aria-label="Start a project">
                Let's Build Something
                <ArrowUpRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => go('#work')} aria-label="Explore our work">
                Explore Our Work
                <ArrowDown size={15} />
              </button>
            </div>

            {/* Live indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
              <span className="status-dot" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: MUTED }}>
                Now accepting project enquiries
              </span>
            </div>
          </div>

          {/* Right — product windows */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Valen Labs — primary */}
            <ValenLabsWindow />

            {/* Valen Live — offset card */}
            <div style={{ marginLeft: '8%', marginRight: '-4%' }}>
              <ValenLiveWindow />
            </div>

            {/* Caption */}
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', color: FAINT, textAlign: 'center', margin: 0 }}>
              Representative previews of live Valen Labs properties
            </p>
          </div>
        </div>
      </div>

      {/* Mobile layout styles */}
      <style>{`
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
