import { RevealWrapper } from '../components/RevealWrapper';

export function Statement() {
  return (
    <section
      className="bg-canvas"
      aria-label="Studio statement"
      style={{ borderTop: '1px solid #E2E2E0', borderBottom: '1px solid #E2E2E0' }}
    >
      <div
        className="max-w-4xl mx-auto px-6 md:px-10 text-center"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <RevealWrapper direction="fade">
          <p
            className="font-display text-balance"
            style={{
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              color: '#0F0F0F',
            }}
          >
            Ideas are the beginning.{' '}
            <span style={{ color: '#B8B8B8' }}>What matters is what you build.</span>
          </p>
        </RevealWrapper>
      </div>
    </section>
  );
}
