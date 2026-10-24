import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  direction?: 'up' | 'fade' | 'left' | 'right';
}

export function RevealWrapper({
  children,
  className = '',
  style = {},
  delay = 0,
  direction = 'up',
}: RevealWrapperProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const hiddenStyles: Record<string, React.CSSProperties> = {
    up:    { opacity: 0, transform: 'translateY(24px)' },
    fade:  { opacity: 0, transform: 'none' },
    left:  { opacity: 0, transform: 'translateX(-18px)' },
    right: { opacity: 0, transform: 'translateX(18px)' },
  };

  const computedStyle: React.CSSProperties = {
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...(visible
      ? { opacity: 1, transform: 'none' }
      : hiddenStyles[direction]),
    ...style,
  };

  return (
    <div ref={ref} className={className} style={computedStyle}>
      {children}
    </div>
  );
}
