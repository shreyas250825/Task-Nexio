import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS, CONTACT_EMAIL } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-ink-10 last:border-b">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
        aria-expanded={open}
      >
        <span
          className="font-medium text-ink group-hover:text-blue-600 transition-colors leading-snug"
          style={{ fontSize: '0.9375rem', letterSpacing: '-0.01em' }}
        >
          {q}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-ink-40 group-hover:text-blue-600 transition-colors">
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-80 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-sm text-ink-60 leading-relaxed pr-8">{a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="bg-canvas py-28 md:py-32" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="divider-x mb-20" />

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left */}
          <RevealWrapper className="lg:sticky lg:top-24 h-fit space-y-5">
            <p className="text-2xs font-semibold tracking-widest uppercase text-ink-40">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-display text-ink text-balance"
              style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', lineHeight: 1.15, letterSpacing: '-0.03em' }}
            >
              Common questions.
            </h2>
            <p className="text-sm text-ink-60 leading-relaxed">
              Something else on your mind?{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-blue-600 font-medium hover:underline underline-offset-2"
              >
                Email us directly.
              </a>
            </p>
          </RevealWrapper>

          {/* Right — accordion */}
          <RevealWrapper className="lg:col-span-2" delay={80}>
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
