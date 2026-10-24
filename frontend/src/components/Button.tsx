import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?:    'sm' | 'md' | 'lg';
  as?:      'button' | 'a';
  href?:    string;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:opacity-50 disabled:pointer-events-none select-none';

const variants = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-500 active:bg-brand-700 shadow-glow-sm hover:shadow-glow-md',
  secondary:
    'bg-transparent text-slate-200 border border-surface-border hover:border-brand-500/60 hover:text-white hover:bg-surface-hover',
  ghost:
    'bg-transparent text-slate-400 hover:text-white hover:bg-surface-hover',
};

const sizes = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-6 py-3 text-sm',
  lg:  'px-8 py-4 text-base',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', as: Tag = 'button', href, children, className = '', ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (Tag === 'a' && href) {
      return (
        <a href={href} className={cls}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={cls} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
