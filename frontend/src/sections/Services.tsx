import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

const INK   = '#171717';
const IVORY = '#F6F3EC';
const IVORY_D = '#EDE9DF';
const BLUE  = '#294FFF';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const CHART = '#D6FF66';

/* Small SVG illustrations — one per service */
function WebsiteIllo() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: 'auto' }}>
      <rect width="120" height="80" rx="6" fill="#171717"/>
      <rect x="0" y="0" width="120" height="16" rx="6" fill="#1E2030"/>
      <circle cx="10" cy="8" r="3" fill="rgba(255,68,58,0.7)"/>
      <circle cx="20" cy="8" r="3" fill="rgba(255,189,46,0.7)"/>
      <circle cx="30" cy="8" r="3" fill="rgba(40,200,64,0.7)"/>
      <rect x="38" y="4" width="50" height="8" rx="3" fill="rgba(255,255,255,0.07)"/>
      <rect x="10" y="24" width="60" height="10" rx="2" fill="rgba(255,255,255,0.7)"/>
      <rect x="10" y="38" width="48" height="7" rx="2" fill="rgba(255,255,255,0.45)"/>
      <rect x="10" y="49" width="70" height="5" rx="2" fill="rgba(255,255,255,0.15)"/>
      <rect x="10" y="56" width="55" height="5" rx="2" fill="rgba(255,255,255,0.10)"/>
      <rect x="10" y="65" width="30" height="9" rx="3" fill={BLUE}/>
      <rect x="45" y="65" width="24" height="9" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5"/>
      <circle cx="100" cy="50" r="16" fill={`${BLUE}20`} stroke={`${BLUE}40`} strokeWidth="1"/>
      <circle cx="100" cy="50" r="8" fill={`${BLUE}50`}/>
    </svg>
  );
}

function PortalIllo() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: 'auto' }}>
      <rect width="120" height="80" rx="6" fill="#FAFAF8" stroke="#D8D4CC" strokeWidth="0.5"/>
      <rect x="0" y="0" width="28" height="80" rx="6" fill="#F0EFED"/>
      <rect x="6" y="10" width="16" height="4" rx="2" fill="#294FFF" opacity="0.8"/>
      <rect x="6" y="18" width="16" height="3" rx="1.5" fill="#D8D4CC"/>
      <rect x="6" y="24" width="16" height="3" rx="1.5" fill="#D8D4CC"/>
      <rect x="6" y="30" width="16" height="3" rx="1.5" fill="#D8D4CC"/>
      <rect x="6" y="36" width="16" height="3" rx="1.5" fill="#D8D4CC"/>
      <rect x="34" y="8" width="36" height="6" rx="2" fill="#171717"/>
      <rect x="34" y="18" width="28" height="14" rx="3" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="0.5"/>
      <rect x="36" y="21" width="12" height="5" rx="1.5" fill="#294FFF" opacity="0.8"/>
      <rect x="66" y="18" width="28" height="14" rx="3" fill="#F0FDFA" stroke="#99F6E4" strokeWidth="0.5"/>
      <rect x="68" y="21" width="12" height="5" rx="1.5" fill="#0D9488" opacity="0.8"/>
      <rect x="34" y="36" width="60" height="36" rx="3" fill="white" stroke="#E8E8E6" strokeWidth="0.5"/>
      {[46, 54, 62].map((y, i) => (
        <rect key={i} x="38" y={y} width={`${45 + i * 5}%`} height="4" rx="2" fill="#E8E8E6"/>
      ))}
    </svg>
  );
}

function AIIllo() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: 'auto' }}>
      <rect width="120" height="80" rx="6" fill="#FAFAFA" stroke="#D8D4CC" strokeWidth="0.5"/>
      <rect x="8" y="8" width="104" height="20" rx="4" fill="#F5F0FF" stroke="#E9D5FF" strokeWidth="0.5"/>
      <circle cx="18" cy="18" r="6" fill="#7C3AED" opacity="0.8"/>
      <rect x="28" y="13" width="60" height="4" rx="2" fill="#D8B4FE" opacity="0.8"/>
      <rect x="28" y="19" width="44" height="3" rx="1.5" fill="#EDE9FE" opacity="0.8"/>
      {/* AI thinking dots */}
      {[86, 94, 102].map((x, i) => (
        <circle key={i} cx={x} cy="18" r="3" fill="#7C3AED" opacity={0.4 + i * 0.2}/>
      ))}
      <rect x="24" y="34" width="88" height="18" rx="4" fill="white" stroke="#E8E8E6" strokeWidth="0.5"/>
      <rect x="30" y="39" width="52" height="3.5" rx="1.75" fill="#E2E2E0"/>
      <rect x="30" y="45" width="38" height="3" rx="1.5" fill="#EAEAE8"/>
      <rect x="8" y="58" width="80" height="14" rx="3" fill="white" stroke="#E8E8E6" strokeWidth="0.5"/>
      <rect x="14" y="63" width="50" height="3" rx="1.5" fill="#D8D4CC"/>
      <rect x="96" y="58" width="16" height="14" rx="3" fill={BLUE}/>
    </svg>
  );
}

function SaaSIllo() {
  return (
    <svg viewBox="0 0 120 80" fill="none" style={{ width: '100%', height: 'auto' }}>
      <rect width="120" height="80" rx="6" fill="#0F1117"/>
      <rect x="0" y="0" width="120" height="14" rx="6" fill="#1A1D2E"/>
      <circle cx="8" cy="7" r="2.5" fill="rgba(255,68,58,0.7)"/>
      <circle cx="16" cy="7" r="2.5" fill="rgba(255,189,46,0.7)"/>
      <circle cx="24" cy="7" r="2.5" fill="rgba(40,200,64,0.7)"/>
      <text x="32" y="10" fontSize="7" fill="rgba(255,255,255,0.25)" fontFamily="monospace">index.ts</text>
      {[
        { y: 22, text: 'import { createApp }', c: '#C792EA' },
        { y: 30, text: "  from './server'",    c: '#C3E88D' },
        { y: 38, text: 'const app = createApp({', c: '#82AAFF' },
        { y: 46, text: '  db: postgres,',      c: '#F78C6C' },
        { y: 54, text: "  auth: 'oauth2',",    c: '#C3E88D' },
        { y: 62, text: "  ai: { model: 'gpt' }", c: '#89DDFF' },
        { y: 70, text: '})',                   c: '#82AAFF' },
      ].map((line, i) => (
        <text key={i} x="8" y={line.y} fontSize="7.5" fill={line.c} fontFamily="monospace">{line.text}</text>
      ))}
      {/* Chartreuse accent dot */}
      <circle cx="112" cy="22" r="4" fill={CHART} opacity="0.9"/>
    </svg>
  );
}

const illustrations = [WebsiteIllo, PortalIllo, AIIllo, SaaSIllo];

export function Services() {
  const go = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" style={{ background: 'var(--bg-page-alt)', paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="services-heading">
      <div className="container">

        {/* Header */}
        <RevealWrapper>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'end', marginBottom: '4rem' }} className="services-header">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Services</span>
              </div>
              <h2 id="services-heading" className="text-section" style={{ margin: 0 }}>
                What will you<br />build next?
              </h2>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1rem', lineHeight: 1.7, color: '#525252', margin: 0 }}>
              Four practice areas. Every engagement focused on delivering digital products
              that create measurable outcomes for your business.
            </p>
          </div>
        </RevealWrapper>

        {/* Service rows — alternating text/visual */}
        {SERVICES.map((service, i) => {
          const Illo = illustrations[i];
          const isOdd = i % 2 !== 0;

          return (
            <RevealWrapper key={service.number} delay={i * 50}>
              <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: '3rem', paddingBottom: '3rem' }}>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '0.4fr 1fr 0.6fr', gap: '2.5rem', alignItems: 'center' }}
                  className={`svc-row-${i}`}
                >
                  {/* Index number */}
                  <div className="index-num" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', textAlign: 'center' }}>
                    {service.number}
                  </div>

                  {/* Copy */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                    <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', fontWeight: 600, letterSpacing: '-0.02em', color: INK, margin: 0 }}>
                      {service.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: '#525252', margin: 0 }}>
                      {service.body}
                    </p>
                    <button
                      onClick={go}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', fontWeight: 600, color: BLUE, transition: 'gap 0.15s ease' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = '8px'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.gap = '5px'; }}
                    >
                      Discuss this service
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  {/* Illustration */}
                  <div style={{ borderRadius: 8, overflow: 'hidden', border: `1px solid ${RULE}` }}>
                    <Illo />
                  </div>
                </div>
              </div>
              <style>{`
                @media (max-width: 767px) {
                  .svc-row-${i} {
                    grid-template-columns: 1fr !important;
                    gap: 1.25rem !important;
                  }
                  .svc-row-${i} .index-num {
                    display: none !important;
                  }
                }
                @media (max-width: 1023px) {
                  .services-header { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </RevealWrapper>
          );
        })}
        <div style={{ borderTop: `1px solid ${RULE}` }} />
      </div>
    </section>
  );
}
