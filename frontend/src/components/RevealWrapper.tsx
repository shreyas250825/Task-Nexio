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

  const transforms: Record<string, string> = {
    up:    'opacity-0 translate-y-8',
    fade:  'opacity-0',
    left:  'opacity-0 -translate-x-6',
    right: 'opacity-0 translate-x-6',
  };

  const base   = 'transition-all duration-700 ease-spring';
  const hidden = transforms[direction];
  const shown  = 'opacity-100 translate-y-0 translate-x-0';

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : hidden} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
