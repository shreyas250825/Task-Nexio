import { useEffect, useRef, useState } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function useScrollReveal<T extends Element>({
  threshold  = 0.05,
  rootMargin = '0px 0px -20px 0px',
  once       = true,
}: Options = {}) {
  const ref             = useRef<T>(null);
  const [visible, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Always show immediately for reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(true);
      return;
    }

    // Check if already visible on mount (above the fold)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      // Small delay so CSS transition has time to register before showing
      const t = setTimeout(() => setV(true), 50);
      return () => clearTimeout(t);
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
