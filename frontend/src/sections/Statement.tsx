import { RevealWrapper } from '../components/RevealWrapper';

export function Statement() {
  return (
    <section className="bg-canvas py-24 md:py-32" aria-label="Studio statement">
      <div className="divider-x mb-0" />
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 text-center">
        <RevealWrapper direction="fade">
          <p
            className="font-display text-balance text-ink"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
            }}
          >
            Ideas are the beginning.
            <br />
            <span className="text-ink-40">What matters is what you build.</span>
          </p>
        </RevealWrapper>
      </div>
      <div className="divider-x mt-0" />
    </section>
  );
}
