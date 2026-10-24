import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../lib/constants';
import { RevealWrapper } from '../components/RevealWrapper';

// ─── Per-service interface compositions ──────────────────────────────────────
function WebsiteComposition() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden"
      style={{ background: '#0A0D14', aspectRatio: '16/9' }}
      aria-hidden="true"
    >
      <div className="p-5 h-full flex flex-col">
        {/* Nav */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded" style={{ background: '#2563EB' }} />
            <div className="h-2 w-16 rounded" style={{ background: 'rgba(255,255,255,0.2)' }} />
          </div>
          <div className="flex gap-2">
            {[40, 32, 36, 44].map((w, i) => (
              <div key={i} className="h-1.5 rounded" style={{ width: w, background: 'rgba(255,255,255,0.1)' }} />
            ))}
          </div>
          <div className="h-6 w-16 rounded-md" style={{ background: '#2563EB' }} />
        </div>
        {/* Hero */}
        <div className="flex-1 flex flex-col justify-center space-y-3">
          <div className="h-1.5 w-24 rounded-full" style={{ background: 'rgba(37,99,235,0.6)' }} />
          <div className="h-7 w-3/4 rounded-md" style={{ background: 'rgba(255,255,255,0.7)' }} />
          <div className="h-7 w-1/2 rounded-md" style={{ background: 'rgba(255,255,255,0.45)' }} />
          <div className="h-3 w-4/5 rounded mt-1" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <div className="h-3 w-2/3 rounded" style={{ background: 'rgba(255,255,255,0.10)' }} />
          <div className="flex gap-2 mt-2">
            <div className="h-8 w-24 rounded-md" style={{ background: '#2563EB' }} />
            <div className="h-8 w-20 rounded-md" style={{ border: '1px solid rgba(255,255,255,0.15)' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PortalComposition() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden border"
      style={{ background: 'white', borderColor: '#E8E8E6', aspectRatio: '16/9' }}
      aria-hidden="true"
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-32 border-r p-3 space-y-2 flex-shrink-0" style={{ borderColor: '#F0EFED', background: '#F8F8F6' }}>
          <div className="h-6 w-20 rounded bg-ink-10 mb-4" />
          {[true, false, false, false, false].map((active, i) => (
            <div
              key={i}
              className="h-7 rounded-md flex items-center gap-2 px-2"
              style={{ background: active ? '#2563EB' : 'transparent' }}
            >
              <div className="w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ background: active ? 'rgba(255,255,255,0.7)' : '#C8C8C6' }} />
              <div className="h-1.5 flex-1 rounded" style={{ background: active ? 'rgba(255,255,255,0.5)' : '#D8D8D6' }} />
            </div>
          ))}
        </div>
        {/* Content */}
        <div className="flex-1 p-4 space-y-3">
          <div className="h-4 w-40 rounded bg-ink-80" />
          <div className="grid grid-cols-3 gap-2">
            {['#2563EB', '#0D9488', '#D97706'].map((c) => (
              <div key={c} className="rounded-lg p-3" style={{ background: c + '10', border: `1px solid ${c}25` }}>
                <div className="h-4 w-8 rounded font-bold" style={{ background: c + '80' }} />
                <div className="h-2 w-12 rounded mt-1" style={{ background: c + '40' }} />
              </div>
            ))}
          </div>
          <div className="rounded-lg border overflow-hidden" style={{ borderColor: '#F0EFED' }}>
            {[70, 85, 60, 90].map((w, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 border-b last:border-0" style={{ borderColor: '#F0EFED' }}>
                <div className="w-5 h-5 rounded bg-ink-10 flex-shrink-0" />
                <div className="h-2 rounded bg-ink-10 flex-1" style={{ width: `${w}%` }} />
                <div className="h-4 w-8 rounded" style={{ background: '#2563EB', opacity: 0.3 }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AIComposition() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden border"
      style={{ background: '#FAFAFA', borderColor: '#E8E8E6', aspectRatio: '16/9' }}
      aria-hidden="true"
    >
      <div className="p-5 h-full flex flex-col gap-3">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-md" style={{ background: '#7C3AED' }} />
            <div className="h-2 w-24 rounded bg-ink-20" />
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[8px] font-medium"
            style={{ background: 'rgba(124,58,237,0.1)', color: '#7C3AED', border: '1px solid rgba(124,58,237,0.2)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            AI Active
          </div>
        </div>

        {/* Chat / doc area */}
        <div className="flex-1 flex flex-col gap-2 justify-end">
          {/* Document card */}
          <div className="flex items-start gap-2 justify-end">
            <div className="max-w-[70%] space-y-1 rounded-xl rounded-tr-sm p-2.5" style={{ background: '#F0EDF8' }}>
              {[90, 75, 60].map((w, i) => (
                <div key={i} className="h-2 rounded" style={{ width: `${w}%`, background: '#C4B5FD' }} />
              ))}
            </div>
          </div>
          {/* AI response */}
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full flex-shrink-0" style={{ background: '#7C3AED' }} />
            <div className="max-w-[75%] space-y-1.5 rounded-xl rounded-tl-sm p-2.5 border border-purple-100" style={{ background: 'white' }}>
              {[100, 85, 70, 55].map((w, i) => (
                <div key={i} className="h-2 rounded bg-ink-10" style={{ width: `${w}%` }} />
              ))}
              <div className="flex gap-1 pt-1">
                <div className="h-4 w-12 rounded" style={{ background: '#7C3AED', opacity: 0.8 }} />
                <div className="h-4 w-16 rounded" style={{ background: '#F0EDF8' }} />
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="flex gap-2 items-center rounded-xl border px-3 py-2.5" style={{ borderColor: '#E0D9F0', background: 'white' }}>
            <div className="flex-1 h-2 rounded bg-ink-10" />
            <div className="w-6 h-6 rounded-md flex-shrink-0" style={{ background: '#7C3AED' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SaaSComposition() {
  return (
    <div
      className="w-full rounded-xl overflow-hidden border font-mono"
      style={{ background: '#0F1117', borderColor: '#2D2D35', aspectRatio: '16/9' }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b" style={{ borderColor: '#2D2D35' }}>
        {['rgba(255,68,58,0.7)', 'rgba(255,189,46,0.7)', 'rgba(40,200,64,0.7)'].map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
        <span className="ml-3 text-[9px]" style={{ color: 'rgba(255,255,255,0.25)' }}>main.ts</span>
      </div>
      <div className="p-4 space-y-1.5">
        {[
          { text: 'import { createApp } from',  c: '#C792EA' },
          { text: '  "./server"',                c: '#C3E88D' },
          { text: '',                            c: '' },
          { text: 'const app = createApp({',    c: '#82AAFF' },
          { text: '  database: postgres,',       c: '#F78C6C' },
          { text: '  auth: {',                   c: '#F78C6C' },
          { text: '    provider: "oauth2",',     c: '#C3E88D' },
          { text: '    roles: ["admin","user"]', c: '#C3E88D' },
          { text: '  },',                        c: '#F78C6C' },
          { text: '  ai: { model: "gpt-4o" }',  c: '#89DDFF' },
          { text: '})',                           c: '#82AAFF' },
          { text: '',                            c: '' },
          { text: 'app.listen(3000)',            c: '#C792EA' },
        ].map((line, i) => (
          <div key={i} className="text-[9px] leading-5 tabular" style={{ color: line.c || 'transparent', height: '1.25rem' }}>
            {line.text}
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = [WebsiteComposition, PortalComposition, AIComposition, SaaSComposition];

export function Services() {
  const go = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-ink-5 py-28 md:py-36" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Header */}
        <RevealWrapper className="mb-20">
          <h2
            id="services-heading"
            className="font-display text-ink text-balance"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', lineHeight: 1.1, letterSpacing: '-0.035em' }}
          >
            What will you
            <br />
            build next?
          </h2>
          <p className="mt-4 text-lg text-ink-60 max-w-xl leading-relaxed">
            Four practice areas. Every one focused on delivering digital products that create
            real outcomes for the businesses we work with.
          </p>
        </RevealWrapper>

        {/* Services — alternating layout */}
        <div className="space-y-20">
          {SERVICES.map((service, i) => {
            const Visual = visuals[i];
            const isEven = i % 2 === 0;

            return (
              <RevealWrapper key={service.number} delay={60}>
                <article
                  className={[
                    'grid lg:grid-cols-2 gap-12 lg:gap-16 items-center',
                    !isEven ? 'lg:grid-flow-dense' : '',
                  ].join(' ')}
                >
                  {/* Visual */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <Visual />
                  </div>

                  {/* Copy */}
                  <div className={`space-y-5 ${!isEven ? 'lg:col-start-1' : ''}`}>
                    <span
                      className="font-display text-ink-10 tabular select-none"
                      style={{ fontSize: '5rem', lineHeight: 1, letterSpacing: '-0.05em' }}
                    >
                      {service.number}
                    </span>
                    <h3
                      className="font-semibold text-ink"
                      style={{ fontSize: '1.625rem', lineHeight: 1.25, letterSpacing: '-0.025em' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-ink-60 leading-relaxed">{service.body}</p>
                    <button
                      onClick={() => go('#contact')}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 group transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded"
                    >
                      Discuss this service
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </article>
              </RevealWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
