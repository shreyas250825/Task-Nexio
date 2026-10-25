import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_EMAIL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

const INK   = '#171717';
const IVORY = '#F6F3EC';
const BLUE  = '#294FFF';
const MUTED = '#737373';
const RULE  = '#D8D4CC';
const CHART = '#D6FF66';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: `1px solid ${RULE}` }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', fontWeight: 500, lineHeight: 1.5, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          {q}
        </span>
        <span style={{ flexShrink: 0, color: 'var(--text-muted)', marginTop: 2, transition: 'color 0.15s ease' }}>
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <div style={{ overflow: 'hidden', maxHeight: open ? 320 : 0, opacity: open ? 1 : 0, transition: 'max-height 0.3s ease, opacity 0.3s ease', paddingBottom: open ? '1.25rem' : 0 }}>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.7, color: 'var(--text-muted)', margin: 0 }}>{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" style={{ background: 'var(--bg-page-alt)', paddingTop: '6rem', paddingBottom: '6rem' }} aria-labelledby="faq-heading">
      <div className="container">
        <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: '4rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '4rem' }} className="faq-grid">

            <RevealWrapper>
              <div style={{ position: 'sticky', top: '6rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
                  <span style={{ height: 3, width: 32, background: CHART, borderRadius: 9999, display: 'block' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: MUTED }}>FAQ</span>
                </div>
                <h2 id="faq-heading" className="font-display" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', lineHeight: 1.1, letterSpacing: '-0.025em', color: 'var(--text-primary)', margin: '0 0 1rem' }}>
                  Common questions.
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9375rem', lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
                  Something else?{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: BLUE, fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 3 }}>Email us.</a>
                </p>
              </div>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <div>
                {FAQ_ITEMS.map((item) => (
                  <FAQItem key={item.q} q={item.q} a={item.a} />
                ))}
                <div style={{ borderTop: `1px solid ${RULE}` }} />
              </div>
            </RevealWrapper>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .faq-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
