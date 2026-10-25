import { ArrowUpRight, ArrowDown } from 'lucide-react';

const BLUE  = '#294FFF';
const CHART = '#D6FF66';

function ValenLabsWindow() {
  return (
    <div className="bracket-frame card-lift" style={{ borderRadius: 12, overflow: 'hidden', background: '#0C0E17', boxShadow: '0 20px 56px rgba(0,0,0,0.22), 0 4px 14px rgba(0,0,0,0.12)', width: '100%' }} aria-hidden="true">
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {['rgba(255,68,58,0.75)', 'rgba(255,189,46,0.75)', 'rgba(40,200,64,0.75)'].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, flexShrink: 0 }} />
        ))}
        <div style={{ flex: 1, minWidth: 0, marginLeft: 8, height: 20, borderRadius: 4, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80', flexShrink: 0 }} />
          <span style={{ fontFamily: 'monospace', fontSize: 9, color: 'rgba(255,255,255,0.3)' }}>valenlabs.in</span>
        </div>
      </div>
      <div style={{ padding: '16px 18px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: BLUE, flexShrink: 0 }} />
            <div style={{ height: 9, width: 60, borderRadius: 3, background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div style={{ height: 24, width: 64, borderRadius: 4, background: BLUE, flexShrink: 0 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '3px 9px', borderRadius: 20, background: 'rgba(41,79,255,0.15)', border: '1px solid rgba(41,79,255,0.3)', width: 'fit-content', maxWidth: '100%' }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#6B86FF', flexShrink: 0 }} />
            <span style={{ fontSize: 9, fontWeight: 600, color: '#6B86FF', letterSpacing: '0.04em' }}>AI & Technology Platform</span>
          </div>
          {['88%', '65%', '48%'].map((w, i) => (
            <div key={i} style={{ height: 22, width: w, borderRadius: 4, background: `rgba(255,255,255,${0.75 - i * 0.2})` }} />
          ))}
          <div style={{ height: 8, width: '80%', borderRadius: 3, background: 'rgba(255,255,255,0.12)', marginTop: 4 }} />
          <div style={{ height: 8, width: '65%', borderRadius: 3, background: 'rgba(255,255,255,0.08)' }} />
          <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
            <div style={{ height: 28, width: 90, borderRadius: 4, background: BLUE, flexShrink: 0 }} />
            <div style={{ height: 28, width: 72, borderRadius: 4, border: '1px solid rgba(255,255,255,0.14)', flexShrink: 0 }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginTop: 14, background: 'rgba(255,255,255,0.05)', borderRadius: 5, overflow: 'hidden' }}>
          {['AI Products', 'Integrations', 'Platforms'].map((label) => (
            <div key={label} style={{ padding: '8px 10px', background: '#0C0E17' }}>
              <div style={{ height: 7, width: '65%', borderRadius: 2, background: 'rgba(255,255,255,0.26)', marginBottom: 3 }} />
              <div style={{ fontSize: 7, color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ValenLiveWindow() {
  return (
    <div style={{ borderRadius: 10, overflow: 'hidden', background: '#FAFFFE', boxShadow: '0 10px 32px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06)', border: '1px solid #E0F2F0', width: '100%' }} aria-hidden="true">
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', background: '#F0FDFA', borderBottom: '1px solid #E0F2F0' }}>
        {['rgba(255,68,58,0.6)', 'rgba(255,189,46,0.6)', 'rgba(40,200,64,0.6)'].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: c, flexShrink: 0 }} />
        ))}
        <div style={{ flex: 1, marginLeft: 5, height: 17, borderRadius: 3, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', padding: '0 8px', gap: 4 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ADE80', flexShrink: 0 }} />
          <span style={{ fontFamily: 'monospace', fontSize: 8, color: '#737373' }}>valen.live</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, padding: '10px 12px 8px' }}>
        {[
          { v: '24', l: 'Sessions', bg: '#F0FDFA', bd: '#99F6E4', c: '#0D9488' },
          { v: '7d', l: 'Streak',   bg: '#EFF6FF', bd: '#BFDBFE', c: '#294FFF' },
          { v: '84%',l: 'Score',    bg: '#FFFBEB', bd: '#FDE68A', c: '#D97706' },
        ].map((s) => (
          <div key={s.l} style={{ borderRadius: 6, padding: '7px 9px', background: s.bg, border: `1px solid ${s.bd}` }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: s.c, fontFamily: 'Inter, sans-serif' }}>{s.v}</div>
            <div style={{ fontSize: 7, color: '#737373', marginTop: 1 }}>{s.l}</div>
          </div>
        ))}
      </div>
      <div style={{ margin: '0 12px 12px', borderRadius: 5, border: '1px solid #E8E8E6', overflow: 'hidden', background: '#FFF' }}>
        {[90, 76, 83].map((score, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '7px 9px', borderBottom: i < 2 ? '1px solid #F4F4F2' : 'none' }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: `rgba(13,148,136,${0.08 + i * 0.04})`, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ height: 6, borderRadius: 2, background: '#E8E8E6', width: `${60 + i * 10}%`, marginBottom: 3 }} />
              <div style={{ height: 4, borderRadius: 2, background: '#F0EFED', width: `${45 + i * 7}%` }} />
            </div>
            <div style={{ fontSize: 7, fontWeight: 700, padding: '2px 4px', borderRadius: 3, color: score >= 80 ? '#0D9488' : '#D97706', background: score >= 80 ? '#F0FDFA' : '#FFFBEB', fontFamily: 'monospace', flexShrink: 0 }}>
              {score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const go = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section id="hero" aria-label="Hero" style={{ background: 'var(--bg-page)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${BLUE} 0%, ${CHART} 100%)` }} aria-hidden="true" />
      <div className="container" style={{ paddingTop: 'clamp(5.5rem, 12vw, 8rem)', paddingBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ display: 'inline-block', width: 24, height: 3, background: CHART, borderRadius: 9999, flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                A Valen Labs Product
              </span>
            </div>

            <h1 className="text-hero" style={{ margin: 0 }}>
              From Vision<br />
              <em style={{ fontStyle: 'italic', color: BLUE }}>to Reality.</em>
            </h1>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.9375rem, 2vw, 1.2rem)', fontWeight: 600, color: 'var(--text-primary)', margin: 0, letterSpacing: '-0.015em' }}>
              From Ideas to Impact.
            </p>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.875rem, 1.5vw, 1.0625rem)', lineHeight: 1.7, color: 'var(--text-secondary)', margin: 0 }}>
              We transform ambitious business ideas into beautifully designed websites,
              custom applications, and intelligent digital products.
            </p>

            <div className="hero-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 4 }}>
              <button className="btn-primary" onClick={() => go('#contact')} aria-label="Start a project">
                Let's Build Something <ArrowUpRight size={16} />
              </button>
              <button className="btn-secondary" onClick={() => go('#work')} aria-label="Explore our work">
                Explore Our Work <ArrowDown size={15} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 2 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: CHART, display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                Now accepting project enquiries
              </span>
            </div>
          </div>

          <div className="hero-windows" style={{ display: 'flex', flexDirection: 'column', gap: 14, minWidth: 0 }}>
            <ValenLabsWindow />
            <div style={{ paddingLeft: '5%' }}>
              <ValenLiveWindow />
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.6875rem', color: 'var(--text-faint)', textAlign: 'center', margin: 0 }}>
              Representative previews of live Valen Labs properties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
