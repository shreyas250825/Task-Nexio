import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'fade';
}

export function RevealWrapper({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: RevealWrapperProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const base    = 'transition-all duration-700 ease-out';
  const hidden  = direction === 'up'
    ? 'opacity-0 translate-y-8'
    : 'opacity-0';
  const shown   = 'opacity-100 translate-y-0';

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
