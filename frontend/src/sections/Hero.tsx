import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { BRAND_NAME, PARENT_COMPANY } from '../lib/constants';

// ─── Hero visual: abstract digital product composition ────────────────────────
function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0 lg:max-w-none aspect-[4/3] select-none" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 rounded-full bg-brand-600/10 blur-3xl" />
      </div>

      {/* Main browser window */}
      <div className="absolute top-0 left-0 right-8 rounded-xl border border-surface-border bg-surface-card shadow-card overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-midnight-950/60">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          <div className="flex-1 mx-3 h-5 rounded-md bg-surface-border/50 flex items-center px-2">
            <span className="text-[9px] text-slate-600 font-mono">https://yourclient.com</span>
          </div>
        </div>
        {/* Page content mockup */}
        <div className="p-5 space-y-3">
          <div className="h-6 w-3/5 rounded-md bg-brand-800/40" />
          <div className="h-3 w-full rounded bg-surface-border/60" />
          <div className="h-3 w-4/5 rounded bg-surface-border/60" />
          <div className="h-3 w-2/3 rounded bg-surface-border/40" />
          <div className="mt-4 flex gap-2">
            <div className="h-8 w-24 rounded-lg bg-brand-600/60" />
            <div className="h-8 w-20 rounded-lg bg-surface-border/50" />
          </div>
          {/* Placeholder image block */}
          <div className="mt-3 h-20 rounded-lg bg-gradient-to-br from-brand-900/50 to-midnight-950/80 border border-surface-border flex items-center justify-center">
            <div className="flex gap-3">
              <div className="w-12 h-3 rounded bg-brand-700/40" />
              <div className="w-8 h-3 rounded bg-brand-700/30" />
              <div className="w-10 h-3 rounded bg-brand-700/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard card — bottom right, offset */}
      <div className="absolute bottom-0 right-0 w-56 rounded-xl border border-surface-border bg-surface-card shadow-card p-4 space-y-3">
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div className="h-3 w-24 rounded bg-slate-700/60" />
          <div className="h-5 w-5 rounded bg-brand-800/50 flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-400/80" />
          </div>
        </div>
        {/* Metric row */}
        <div className="flex gap-2">
          {[80, 55, 70].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1 items-center">
              <div
                className="w-full rounded-sm bg-gradient-to-t from-brand-600/60 to-brand-400/30"
                style={{ height: `${h * 0.4}px` }}
              />
              <div className="h-1.5 w-4 rounded bg-surface-border/60" />
            </div>
          ))}
        </div>
        <div className="h-2 w-3/4 rounded bg-surface-border/40" />
      </div>

      {/* AI chip — floating top right */}
      <div className="absolute -top-3 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-card border border-brand-800/60 shadow-glow-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
        <span className="text-[10px] font-mono text-brand-300 tracking-wide">AI · Active</span>
      </div>

      {/* Connector lines (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M340 60 C340 120, 290 160, 290 200"
          stroke="#4338ca"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.4"
        />
        <path
          d="M60 160 C120 160, 200 180, 260 200"
          stroke="#6366f1"
          strokeWidth="1"
          strokeDasharray="4 4"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080d1f]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v1H0zM0 0v40h1V0z' fill='%231c2545' fill-opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brand-900/20 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <div className="space-y-8 max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 animate-fade-up" style={{ animationDelay: '0ms' }}>
              <div className="w-5 h-px bg-brand-500" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-brand-400">
                Introducing {BRAND_NAME}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.07] tracking-tight animate-fade-up"
              style={{ animationDelay: '100ms' }}
            >
              Your next big idea{' '}
              <span className="text-gradient">deserves to be built.</span>
            </h1>

            {/* Supporting text */}
            <p
              className="text-lg text-slate-400 leading-relaxed max-w-xl animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              We design and develop websites, business portals, and AI-powered applications
              that turn ambitious ideas into real-world products.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap items-center gap-4 animate-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <Button as="a" href="#contact" size="lg">
                Start a Project
                <ArrowRight size={16} />
              </Button>
              <Button as="a" href="#services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Trust line */}
            <p
              className="text-xs text-slate-600 tracking-wide animate-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              A digital product studio by{' '}
              <span className="text-slate-500">{PARENT_COMPANY}</span>
            </p>
          </div>

          {/* Right — visual */}
          <div className="hidden lg:block animate-fade-up" style={{ animationDelay: '250ms' }}>
            <HeroVisual />
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex justify-center animate-fade-up" style={{ animationDelay: '600ms' }}>
          <a
            href="#services"
            aria-label="Scroll to services"
            className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors group"
          >
            <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
