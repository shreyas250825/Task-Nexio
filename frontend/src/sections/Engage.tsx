import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '../components/Button';
import { RevealWrapper } from '../components/RevealWrapper';

export function Engage() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/10 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative">
        <RevealWrapper className="text-center space-y-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-950 border border-brand-800/50 flex items-center justify-center mx-auto">
            <Rocket size={24} className="text-brand-400" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Have an idea? Let's make it real.
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Task Nexio works with businesses at different stages — whether you need a new website,
            a custom internal tool, or a full AI-powered product. No idea is too early to discuss.
          </p>

          <p className="text-slate-500 leading-relaxed max-w-xl mx-auto">
            We take a limited number of projects at a time to ensure each one gets the attention it deserves.
            If you have something in mind, the best first step is a short conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button as="a" href="#contact" size="lg">
              Start a Project
              <ArrowRight size={16} />
            </Button>
            <a
              href={`mailto:contact@valenlabs.in`}
              className="text-sm text-slate-400 hover:text-white transition-colors underline underline-offset-4 decoration-slate-700 hover:decoration-slate-500"
            >
              Or email us directly
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
