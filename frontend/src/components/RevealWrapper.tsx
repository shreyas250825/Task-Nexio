import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'fade' | 'left' | 'right';
}

export function RevealWrapper({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealWrapperProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  // Hidden states per direction
  const hiddenStyle: Record<string, React.CSSProperties> = {
    up:    { opacity: 0, transform: 'translateY(28px)' },
    fade:  { opacity: 0, transform: 'none' },
    left:  { opacity: 0, transform: 'translateX(-20px)' },
    right: { opacity: 0, transform: 'translateX(20px)' },
  };

  const shownStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'none',
  };

  const style: React.CSSProperties = {
    transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    ...(visible ? shownStyle : hiddenStyle[direction]),
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
