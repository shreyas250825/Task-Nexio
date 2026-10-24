interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2',
        'text-2xs font-semibold tracking-widest uppercase',
        light ? 'text-white/50' : 'text-ink-40',
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
