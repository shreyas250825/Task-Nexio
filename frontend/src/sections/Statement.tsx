import { RevealWrapper } from '../components/RevealWrapper';

export function Statement() {
  return (
    <section style={{ background: 'var(--stmt-bg)', padding: '5rem 0' }} aria-label="Statement">
      <div className="container">
        <RevealWrapper direction="fade">
          <p className="font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 3.25rem)', lineHeight: 1.2, letterSpacing: '-0.02em', color: 'var(--stmt-text)', margin: 0, maxWidth: 720 }}>
            Ideas are the beginning.{' '}
            <span style={{ color: 'var(--stmt-sub)' }}>What matters is what you build.</span>
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: '1.5rem' }}>
            <div style={{ height: 3, width: 40, background: 'var(--chartreuse)', borderRadius: 9999 }} />
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>
              Task Nexio · Digital Product Studio
            </span>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
