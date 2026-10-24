import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';
import { SectionLabel } from '../components/SectionLabel';

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-surface-border last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-sm"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-slate-200 group-hover:text-white transition-colors leading-snug">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-slate-600 group-hover:text-slate-400 transition-all duration-300 mt-0.5 ${
            open ? 'rotate-180 text-brand-400' : ''
          }`}
        />
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 text-slate-400 leading-relaxed text-sm pr-8">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left label */}
          <RevealWrapper className="lg:sticky lg:top-28 h-fit space-y-4">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="text-3xl font-bold text-white tracking-tight leading-snug">
              Common questions.
            </h2>
            <p className="text-slate-400 leading-relaxed">
              Can't find the answer you're looking for? Email us at{' '}
              <a
                href="mailto:contact@valenlabs.in"
                className="text-brand-400 hover:text-brand-300 transition-colors underline underline-offset-2"
              >
                contact@valenlabs.in
              </a>
            </p>
          </RevealWrapper>

          {/* Right accordion */}
          <RevealWrapper className="lg:col-span-2">
            <div>
              {FAQ_ITEMS.map((item) => (
                <FAQItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
