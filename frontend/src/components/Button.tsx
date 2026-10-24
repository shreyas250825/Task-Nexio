import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-spring ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ' +
  'disabled:opacity-40 disabled:pointer-events-none select-none cursor-pointer';

const variants: Record<string, string> = {
  primary:
    'bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-[0.98] shadow-sm hover:shadow-md',
  secondary:
    'bg-transparent text-ink border border-ink-10 rounded-md hover:border-ink-20 hover:bg-ink-5',
  dark:
    'bg-ink-90 text-white rounded-md hover:bg-ink active:scale-[0.98] shadow-sm hover:shadow-md',
  ghost:
    'bg-transparent text-ink-60 rounded-md hover:text-ink hover:bg-ink-5',
};

const sizes: Record<string, string> = {
  sm:  'px-4 py-2 text-sm',
  md:  'px-5 py-2.5 text-sm',
  lg:  'px-7 py-3.5 text-[0.9375rem] tracking-snug',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', as: Tag = 'button', href, target, rel, children, className = '', ...props }, ref) => {
    const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
    if (Tag === 'a' && href) {
      return (
        <a href={href} target={target} rel={rel} className={cls}>
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
