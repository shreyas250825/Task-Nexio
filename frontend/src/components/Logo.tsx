/**
 * Task Nexio official logo components.
 *
 * The N mark geometry is reconstructed from the brand identity board and
 * brand reveal reference images in frontend/public/brand/.
 *
 * Mark construction (viewBox 100×100):
 *   - Two thick diagonal parallelogram bars, leaning left→right (≈55°)
 *   - Gradient: bright blue #2563FF (top-left) → violet #7C3AED (bottom-right)
 *   - Right-pointing play triangle at bottom-left, same gradient
 *   - Chartreuse triangle #C4FF00 at top-right (the notch between the two bars)
 *
 * Wordmark:
 *   - "Task"  — extra-bold (800), near-black #111111 on light / #FFFFFF on dark
 *   - "Nexio" — extra-bold (800), bright blue #2563FF on light / #6B8FFF on dark
 */

import React from 'react';

/* ─── Unique gradient IDs per instance ───────────────────────────── */
let _uid = 0;
function uid() { return `tn-${++_uid}`; }

/* ─────────────────────────────────────────────────────────────────
   NMark — the stylised N symbol
   Uses two thick diagonal parallelogram bands (not a zigzag N path).
   ───────────────────────────────────────────────────────────────── */
export function NMark({
  size = 40,
  className = '',
  style = {},
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const gid = React.useMemo(() => uid(), []);

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ width: size, height: size, flexShrink: 0, ...style }}
      className={className}
    >
      <defs>
        {/*
          The reference shows a clear left-to-right blue→violet gradient
          applied across the entire mark horizontally.
        */}
        <linearGradient id={`${gid}-g`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#2563FF" />
          <stop offset="45%"  stopColor="#5B4FEE" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>

      {/*
        ── LEFT DIAGONAL BAR ──────────────────────────────────────
        A thick parallelogram rising steeply from bottom-left to top-right.
        This is the left stroke of the N.

        Viewing the mark construction grid in the reference:
          Bottom-left of bar:  x≈10, y≈96
          Bottom-right of bar: x≈34, y≈96
          Top-right of bar:    x≈50, y≈10
          Top-left of bar:     x≈26, y≈10
        The bar is ~24 units wide and spans the full height.
      */}
      <polygon
        points="10,96  34,96  50,10  26,10"
        fill={`url(#${gid}-g)`}
      />

      {/*
        ── RIGHT DIAGONAL BAR ────────────────────────────────────
        Parallel to the left bar, offset ~36px right.
        This is the right stroke of the N.

          Bottom-left:  x≈46, y≈96
          Bottom-right: x≈70, y≈96
          Top-right:    x≈86, y≈10
          Top-left:     x≈62, y≈10
      */}
      <polygon
        points="46,96  70,96  86,10  62,10"
        fill={`url(#${gid}-g)`}
      />

      {/*
        ── TOP CONNECTOR ─────────────────────────────────────────
        Bridges the two bars at the top, filling the gap between
        them and creating the readable N shape.

        Left bar's top-right corner:  (50, 10)
        Right bar's top-left corner:  (62, 10)
        These two bars are only ~12 units apart at the top.
        The connector fills that gap as a flat horizontal bridge.

        It also creates the diagonal cross-bar visually:
        From (50,10)-(62,10) at top, down to (50,38)-(62,38)
        where the bars diverge enough to show a gap.
      */}
      <polygon
        points="50,10  62,10  62,40  50,40"
        fill={`url(#${gid}-g)`}
      />

      {/*
        ── CHARTREUSE ACCENT ─────────────────────────────────────
        Yellow-green triangle in the top-right notch.
        From the reference: it's a right triangle sitting between
        the two bars at the top, with its hypotenuse on the diagonal
        of the right bar's top-left edge.

        Top-left vertex:   (62, 10) — right bar's top-left
        Top-right vertex:  (86, 10) — right bar's top-right
        Bottom vertex:     (62, 40) — where connector ends
      */}
      <polygon
        points="62,10  86,10  62,40"
        fill="#C4FF00"
      />

      {/*
        ── PLAY ARROW ────────────────────────────────────────────
        A right-pointing triangle at bottom-left.
        From the reference: sits clearly separated and to the left
        of the left bar's bottom, pointing right.

        Left apex (back of arrow):   (4, 66)
        Right tip:                   (22, 82)
        Left bottom:                 (4, 98)
      */}
      <polygon
        points="4,66  24,82  4,98"
        fill={`url(#${gid}-g)`}
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────────
   LogoFull — Symbol + Wordmark side by side
   variant: 'light' (dark text on light bg) | 'dark' (white text on dark bg)
   ───────────────────────────────────────────────────────────────── */
export function LogoFull({
  variant = 'light',
  symbolSize = 36,
  className = '',
  style = {},
}: {
  variant?: 'light' | 'dark';
  symbolSize?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const taskColor  = variant === 'dark' ? '#FFFFFF' : '#111111';
  const nexioColor = variant === 'dark' ? '#6B8FFF' : '#2563FF';
  const tagColor   = variant === 'dark' ? 'rgba(255,255,255,0.42)' : '#888888';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: Math.round(symbolSize * 0.28),
        ...style,
      }}
      className={className}
      role="img"
      aria-label="Task Nexio"
    >
      {/* Symbol */}
      <NMark size={symbolSize} />

      {/* Wordmark */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* "Task Nexio" on one line */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 0, lineHeight: 1 }}>
          <span style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: Math.round(symbolSize * 0.72),
            letterSpacing: '-0.035em',
            color: taskColor,
            lineHeight: 1,
          }}>
            Task&nbsp;
          </span>
          <span style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: Math.round(symbolSize * 0.72),
            letterSpacing: '-0.035em',
            color: nexioColor,
            lineHeight: 1,
          }}>
            Nexio
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   LogoFullWithTag — includes the tagline beneath the wordmark
   ───────────────────────────────────────────────────────────────── */
export function LogoFullWithTag({
  variant = 'light',
  symbolSize = 40,
}: {
  variant?: 'light' | 'dark';
  symbolSize?: number;
}) {
  const taskColor  = variant === 'dark' ? '#FFFFFF' : '#111111';
  const nexioColor = variant === 'dark' ? '#6B8FFF' : '#2563FF';
  const tagColor   = variant === 'dark' ? 'rgba(255,255,255,0.42)' : '#888888';
  const fs         = Math.round(symbolSize * 0.72);
  const tagFs      = Math.round(symbolSize * 0.22);

  return (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap: Math.round(symbolSize * 0.28) }}
      role="img"
      aria-label="Task Nexio — A Valen Labs Product"
    >
      <NMark size={symbolSize} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ display: 'flex', alignItems: 'baseline' }}>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 800, fontSize: fs, letterSpacing: '-0.035em', color: taskColor, lineHeight: 1 }}>
            Task&nbsp;
          </span>
          <span style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 800, fontSize: fs, letterSpacing: '-0.035em', color: nexioColor, lineHeight: 1 }}>
            Nexio
          </span>
        </div>
        <span style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 400,
          fontSize: tagFs,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: tagColor,
          lineHeight: 1,
          marginTop: 2,
        }}>
          A Valen Labs Product.
        </span>
      </div>
    </div>
  );
}
