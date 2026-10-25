/**
 * Task Nexio Logo — faithful SVG reconstruction from official brand identity board.
 *
 * The N mark geometry (from the mark construction grid):
 *   • Two thick diagonal rounded bars — gradient blue #2563EB → violet #7C3AED
 *   • Chartreuse right-triangle accent #CAFF00 — top-right notch
 *   • Right-pointing play arrow — bottom-left, same gradient
 *   • Fully transparent background — works on any bg colour
 *
 * Wordmark:
 *   • "Task"  — Inter 800, #0D0D0D on light / #FFFFFF on dark
 *   • "Nexio" — Inter 800, #2563EB on light / #6B8FFF on dark
 *   • Tagline — Inter 400 spaced caps, grey
 */

import React, { useId } from 'react';

/* ─── The N Mark ────────────────────────────────────────────────── */
export function NMark({ size = 48 }: { size?: number }) {
  const id = useId().replace(/:/g, '');

  return (
    <svg
      viewBox="0 0 100 110"
      fill="none"
      aria-hidden="true"
      style={{ width: size, height: Math.round(size * 1.1), display: 'block', flexShrink: 0 }}
    >
      <defs>
        {/* Main blue→violet gradient — horizontal matches the brand image direction */}
        <linearGradient id={`${id}a`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>

        {/* Clip for the left bar rounded ends */}
        <clipPath id={`${id}cl`}>
          <rect x="0" y="0" width="100" height="110" />
        </clipPath>
      </defs>

      {/*
        ── LEFT DIAGONAL BAR ─────────────────────────────────────────
        Thick rounded-end bar, angled ~60° from bottom-left to top-right.
        In the brand image the bar goes from bottom-left to upper-right
        and is visually about 22 units wide.

        Using a rotated rounded rectangle for the rounded-end look.
        Centre of bar: from (20, 95) to (44, 12)
        Width of bar: 22 units
      */}
      <rect
        x="-11" y="0"
        width="22" height="96"
        rx="11"
        transform="rotate(-30 35 55)"
        fill={`url(#${id}a)`}
      />

      {/*
        ── RIGHT DIAGONAL BAR ────────────────────────────────────────
        Parallel to the left bar, offset right.
        Same angle and width.
        Centre: from (56, 95) to (80, 12)
      */}
      <rect
        x="-11" y="0"
        width="22" height="96"
        rx="11"
        transform="rotate(-30 71 55)"
        fill={`url(#${id}a)`}
      />

      {/*
        ── TOP CONNECTOR ─────────────────────────────────────────────
        The bridge at the top between the two bars that makes the N
        readable. Fills the gap between the bars at the top section.
      */}
      <polygon
        points="45,10  59,10  59,36  45,36"
        fill={`url(#${id}a)`}
      />

      {/*
        ── CHARTREUSE TRIANGLE ───────────────────────────────────────
        Top-right notch between the two diagonal bars.
        A clear yellow-green right triangle.
      */}
      <polygon
        points="59,10  82,10  59,36"
        fill="#CAFF00"
      />

      {/*
        ── PLAY ARROW ────────────────────────────────────────────────
        Right-pointing solid triangle at bottom-left.
        Same gradient as the N bars.
      */}
      <polygon
        points="4,68  26,82  4,96"
        fill={`url(#${id}a)`}
      />
    </svg>
  );
}

/* ─── Full Logo ─────────────────────────────────────────────────── */
interface LogoFullProps {
  variant?: 'light' | 'dark';
  size?: number; // symbol height in px
  showTagline?: boolean;
}

export function LogoFull({ variant = 'light', size = 40, showTagline = false }: LogoFullProps) {
  const taskColor  = variant === 'dark' ? '#FFFFFF' : '#0D0D0D';
  const nexioColor = variant === 'dark' ? '#6B8FFF' : '#2563EB';
  const tagColor   = variant === 'dark' ? 'rgba(255,255,255,0.42)' : '#888888';

  const fs  = Math.round(size * 0.82);   // font size relative to symbol
  const tfs = Math.round(size * 0.22);   // tagline font size
  const gap = Math.round(size * 0.3);    // gap between symbol and wordmark

  return (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', gap }}
      role="img"
      aria-label="Task Nexio"
    >
      <NMark size={size} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: showTagline ? 2 : 0 }}>
        {/* Wordmark row */}
        <div style={{ display: 'flex', alignItems: 'baseline', lineHeight: 1, gap: 0 }}>
          <span style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: fs,
            letterSpacing: '-0.03em',
            color: taskColor,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}>
            Task&nbsp;
          </span>
          <span style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontWeight: 800,
            fontSize: fs,
            letterSpacing: '-0.03em',
            color: nexioColor,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}>
            Nexio
          </span>
        </div>

        {/* Optional tagline */}
        {showTagline && (
          <span style={{
            fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
            fontWeight: 400,
            fontSize: tfs,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: tagColor,
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}>
            A Valen Labs Product.
          </span>
        )}
      </div>
    </div>
  );
}
