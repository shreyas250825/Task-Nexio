interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase text-brand-400 bg-brand-950/60 border border-brand-800/60 ${className}`}
    >
      {children}
    </span>
  );
}
