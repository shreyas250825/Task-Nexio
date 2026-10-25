import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

const INK   = '#171717';
const BLUE  = '#294FFF';
const TEAL  = '#0D9488';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const IVORY = '#F6F3EC';
const CHART = '#D6FF66';

/* ─── Valen Labs showcase ────────────────────────────────────────── */
function ValenLabsShowcase() {
  return (
    <div
      className="bracket-frame card-lift"
      style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.08)' }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '11px 16px', background: '#0E1020', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        {['rgba(255,68,58,0.75)', 'rgba(255,189,46,0.75)', 'rgba(40,200,64,0.75)'].map((c, i) => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ flex: 1, marginLeft: 8, height: 24, borderRadius: 4, background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: 6 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ADE80' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>valenlabs.in</span>
        </div>
      </div>

      {/* Page */}
      <div style={{ background: '#0A0D17', padding: '28px 28px 32px' }}>
        {/* Nav */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 26, height: 26, borderRadius: 6, background: BLUE }} />
            <div style={{ height: 11, width: 88, borderRadius: 3, background: 'rgba(255,255,255,0.24)' }} />
          </div>
          <div style={{ display: 'flex', gap: 20 }}>
            {[52, 44, 58, 40, 48].map((w, i) => (
              <div key={i} style={{ height: 8, width: w, borderRadius: 3, background: 'rgba(255,255,255,0.11)' }} />
            ))}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <div style={{ height: 32, width: 72, borderRadius: 5, border: '1px solid rgba(255,255,255,0.12)' }} />
            <div style={{ height: 32, width: 96, borderRadius: 5, background: BLUE }} />
          </div>
        </div>

        {/* Hero content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.55fr', gap: 24, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '5px 12px', borderRadius: 20, background: 'rgba(41,79,255,0.14)', border: '1px solid rgba(41,79,255,0.28)', width: 'fit-content' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#6B86FF' }} />
              <span style={{ fontSize: 10, fontWeight: 600, color: '#6B86FF', letterSpacing: '0.06em' }}>AI & Engineering Platform</span>
            </div>
            <div style={{ height: 34, width: '92%', borderRadius: 5, background: 'rgba(255,255,255,0.78)' }} />
            <div style={{ height: 34, width: '72%', borderRadius: 5, background: 'rgba(255,255,255,0.58)' }} />
            <div style={{ height: 34, width: '52%', borderRadius: 5, background: 'rgba(255,255,255,0.38)' }} />
            <div style={{ height: 11, width: '88%', borderRadius: 3, background: 'rgba(255,255,255,0.14)', marginTop: 4 }} />
            <div style={{ height: 11, width: '66%', borderRadius: 3, background: 'rgba(255,255,255,0.10)' }} />
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <div style={{ height: 40, width: 120, borderRadius: 6, background: BLUE }} />
              <div style={{ height: 40, width: 96, borderRadius: 6, border: '1px solid rgba(255,255,255,0.14)' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[BLUE, '#5870FF', '#3D5AFF', '#6B86FF'].map((c, i) => (
              <div key={i} style={{ borderRadius: 8, padding: '12px 14px', background: `${c}16`, border: `1px solid ${c}28` }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: `${c}30`, marginBottom: 8 }} />
                <div style={{ height: 9, width: '72%', borderRadius: 3, background: `${c}70`, marginBottom: 5 }} />
                <div style={{ height: 7, width: '55%', borderRadius: 3, background: `${c}40` }} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 1, marginTop: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 8, overflow: 'hidden' }}>
          {['Digital Solutions', 'AI Architecture', 'Production Ready'].map((label) => (
            <div key={label} style={{ padding: '12px 14px', background: '#0A0D17' }}>
              <div style={{ height: 11, width: '68%', borderRadius: 3, background: 'rgba(255,255,255,0.28)', marginBottom: 5 }} />
              <div style={{ height: 8, width: '80%', borderRadius: 3, background: 'rgba(255,255,255,0.12)', marginBottom: 4 }} />
              <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.18)', fontFamily: 'monospace' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Valen Live showcase ─────────────────────────────────────────── */
function ValenLiveShowcase() {
  return (
    <div
      style={{ borderRadius: 12, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)', border: '1px solid #E0F2F0' }}
      aria-hidden="true"
    >
      {/* Chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 14px', background: '#F0FDFA', borderBottom: '1px solid #E0F2F0' }}>
        {['rgba(255,68,58,0.65)', 'rgba(255,189,46,0.65)', 'rgba(40,200,64,0.65)'].map((c, i) => (
          <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
        ))}
        <div style={{ flex: 1, marginLeft: 8, height: 22, borderRadius: 3, background: 'rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', padding: '0 10px', gap: 5 }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ADE80' }} />
          <span style={{ fontFamily: 'monospace', fontSize: 9, color: MUTED }}>valen.live</span>
        </div>
      </div>

      {/* App shell */}
      <div style={{ display: 'flex', background: '#FFFFFF', minHeight: 360 }}>
        {/* Sidebar */}
        <div className="vl-sidebar" style={{ width: 196, borderRight: '1px solid #F0F0EE', background: '#FAFDF9', padding: '16px 12px', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 4px', marginBottom: 20 }}>
            <div style={{ width: 22, height: 22, borderRadius: 5, background: TEAL }} />
            <div style={{ height: 10, width: 64, borderRadius: 3, background: 'rgba(13,148,136,0.3)' }} />
          </div>
          {[
            { l: 'Dashboard',      a: true },
            { l: 'Interview Prep', a: false },
            { l: 'Code Practice',  a: false },
            { l: 'Assessments',    a: false },
            { l: 'Progress',       a: false },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', borderRadius: 6, marginBottom: 2, background: item.a ? 'rgba(13,148,136,0.1)' : 'transparent', border: item.a ? '1px solid rgba(13,148,136,0.18)' : '1px solid transparent' }}>
              <div style={{ width: 14, height: 14, borderRadius: 3, background: item.a ? TEAL : '#D8D4CC', flexShrink: 0 }} />
              <div style={{ height: 9, flex: 1, borderRadius: 3, background: item.a ? TEAL : '#D8D4CC', opacity: item.a ? 1 : 0.65 }} />
            </div>
          ))}
        </div>

        {/* Main */}
        <div className="vl-main" style={{ flex: 1, padding: '20px 20px', overflow: 'hidden' }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
            <div>
              <div style={{ height: 10, width: 96, borderRadius: 3, background: '#E2E2E0', marginBottom: 8 }} />
              <div style={{ height: 18, width: 180, borderRadius: 4, background: INK }} />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div style={{ height: 32, width: 80, borderRadius: 5, border: `1px solid ${RULE}` }} />
              <div style={{ height: 32, width: 100, borderRadius: 5, background: TEAL }} />
            </div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginBottom: 14 }}>
            {[
              { v: '24', l: 'Sessions', bg: '#F0FDFA', bd: '#99F6E4', c: TEAL },
              { v: '7d', l: 'Streak',   bg: '#EFF6FF', bd: '#BFDBFE', c: BLUE },
              { v: '84%',l: 'Score',    bg: '#FFFBEB', bd: '#FDE68A', c: '#D97706' },
            ].map((s) => (
              <div key={s.l} style={{ borderRadius: 10, padding: '12px 14px', background: s.bg, border: `1px solid ${s.bd}` }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: s.c, fontFamily: 'Inter, sans-serif' }}>{s.v}</div>
                <div style={{ fontSize: 9, color: 'var(--text-muted)', marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Sessions list */}
          <div style={{ borderRadius: 10, border: '1px solid #EAEAE8', overflow: 'hidden', background: '#FFF' }}>
            <div style={{ padding: '10px 14px', background: '#F8F8F6', borderBottom: '1px solid #EAEAE8' }}>
              <div style={{ height: 10, width: 112, borderRadius: 3, background: '#D8D4CC' }} />
            </div>
            {[90, 76, 83, 68].map((score, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', borderBottom: i < 3 ? '1px solid #F4F4F2' : 'none' }}>
                <div style={{ width: 28, height: 28, borderRadius: 7, background: `rgba(13,148,136,${0.07 + i * 0.03})`, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ height: 9, width: `${58 + i * 9}%`, borderRadius: 3, background: '#E2E2E0', marginBottom: 4 }} />
                  <div style={{ height: 7, width: `${42 + i * 7}%`, borderRadius: 3, background: '#EAEAE8' }} />
                </div>
                <div style={{ fontSize: 10, fontWeight: 700, padding: '3px 7px', borderRadius: 4, color: score >= 80 ? TEAL : '#D97706', background: score >= 80 ? '#F0FDFA' : '#FFFBEB', fontFamily: 'monospace' }}>
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

const visuals = [ValenLabsShowcase, ValenLiveShowcase];

/* ─── Work section ───────────────────────────────────────────────── */
export function Work() {
  return (
    <section id="work" style={{ background: 'var(--bg-page)', paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="work-heading">
      <div className="container">

        {/* Header */}
        <RevealWrapper>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
              <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>Our Work</span>
            </div>
            <h2 className="text-section" style={{ margin: '0 0 1rem' }}>
              Ideas are only<br />the beginning.
            </h2>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.0625rem', lineHeight: 1.7, color: '#525252', maxWidth: 520, margin: 0 }}>
              We build real products. These are live properties from Valen Labs — designed,
              engineered, and shipped.
            </p>
          </div>
        </RevealWrapper>

        {/* Products */}
        {PRODUCTS.map((product, i) => {
          const Visual = visuals[i];
          const isOdd  = i % 2 !== 0;
          const accent = i === 0 ? BLUE : TEAL;

          return (
            <RevealWrapper key={product.id} delay={60}>
              <article style={{ marginBottom: i < PRODUCTS.length - 1 ? '5rem' : 0 }}>
                <hr className="rule-x" style={{ marginBottom: '5rem' }} />

                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}
                  className={`work-grid${i}`}
                >
                  {/* Visual */}
                  <div style={{ order: isOdd ? 2 : 1 }}>
                    <Visual />
                  </div>

                  {/* Copy */}
                  <div style={{ order: isOdd ? 1 : 2, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {/* Index number — signature motif */}
                    <div className="index-num">{product.index}</div>

                    <div>
                      <span style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: '0.75rem' }}>
                        {product.category}
                      </span>
                      <h3 className="font-display" style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: 0 }}>
                        {product.title}
                      </h3>
                    </div>

                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#525252', margin: 0 }}>
                      {product.description}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <code style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--text-muted)', background: '#EDE9DF', padding: '3px 8px', borderRadius: 3 }}>
                        {product.displayUrl}
                      </code>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.75rem', color: '#22C55E', fontFamily: 'Inter, sans-serif' }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block' }} />
                        Live
                      </span>
                    </div>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 600, color: accent, textDecoration: 'none', transition: 'gap 0.15s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '10px'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = '6px'; }}
                    >
                      {product.cta}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
              {/* Mobile layout */}
              <style>{`
                @media (max-width: 767px) {
                  .work-grid${i} {
                    grid-template-columns: 1fr !important;
                    gap: 2rem !important;
                  }
                  .work-grid${i} > * { order: unset !important; }
                  .work-grid${i} > *:first-child { order: 1 !important; }
                  .work-grid${i} > *:last-child  { order: 2 !important; }
                }
              `}</style>
            </RevealWrapper>
          );
        })}
      </div>
    </section>
  );
}
