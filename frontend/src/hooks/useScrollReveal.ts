import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends Element>({
  threshold  = 0.08,
  rootMargin = '0px 0px -32px 0px',
  once       = true,
}: Options = {}) {
  const ref               = useRef<T>(null);
  const [visible, setV]   = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip animation for reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setV(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setV(false);
        }
      },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, visible };
}
