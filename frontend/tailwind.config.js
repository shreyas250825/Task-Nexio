/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces
        canvas: '#FAFAF8',
        paper:  '#FFFFFF',
        ink: {
          DEFAULT: '#0F0F0F',
          90:      '#1A1A1A',
          80:      '#2D2D2D',
          60:      '#525252',
          40:      '#8A8A8A',
          20:      '#B8B8B8',
          10:      '#E2E2E0',
          5:       '#F0EFED',
        },
        // Electric blue accent — single, used with restraint
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',  // primary CTA
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Teal for Valen Live product
        teal: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
        },
      },

      fontFamily: {
        sans:    ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', '"Fira Code"', 'Menlo', 'monospace'],
      },

      fontSize: {
        '2xs':  ['0.625rem',  { lineHeight: '0.875rem' }],
        xs:     ['0.75rem',   { lineHeight: '1.125rem' }],
        sm:     ['0.875rem',  { lineHeight: '1.375rem' }],
        base:   ['1rem',      { lineHeight: '1.65rem'  }],
        lg:     ['1.125rem',  { lineHeight: '1.8rem'   }],
        xl:     ['1.25rem',   { lineHeight: '1.875rem' }],
        '2xl':  ['1.5rem',    { lineHeight: '2rem'     }],
        '3xl':  ['1.875rem',  { lineHeight: '2.25rem'  }],
        '4xl':  ['2.25rem',   { lineHeight: '2.7rem'   }],
        '5xl':  ['3rem',      { lineHeight: '3.3rem'   }],
        '6xl':  ['3.75rem',   { lineHeight: '4.125rem' }],
        '7xl':  ['4.5rem',    { lineHeight: '4.95rem'  }],
        '8xl':  ['5.5rem',    { lineHeight: '6rem'     }],
        '9xl':  ['7rem',      { lineHeight: '7.5rem'   }],
      },

      letterSpacing: {
        tightest: '-0.05em',
        tighter:  '-0.035em',
        tight:    '-0.02em',
        snug:     '-0.01em',
        normal:   '0',
        wide:     '0.04em',
        wider:    '0.08em',
        widest:   '0.16em',
      },

      borderRadius: {
        sm:    '4px',
        DEFAULT:'6px',
        md:    '8px',
        lg:    '12px',
        xl:    '16px',
        '2xl': '20px',
        '3xl': '28px',
        full:  '9999px',
      },

      boxShadow: {
        xs:       '0 1px 2px rgba(0,0,0,0.05)',
        sm:       '0 1px 4px rgba(0,0,0,0.06)',
        DEFAULT:  '0 2px 8px rgba(0,0,0,0.07)',
        md:       '0 4px 16px rgba(0,0,0,0.08)',
        lg:       '0 8px 32px rgba(0,0,0,0.09), 0 2px 8px rgba(0,0,0,0.04)',
        xl:       '0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.05)',
        '2xl':    '0 24px 64px rgba(0,0,0,0.12)',
        product:  '0 40px 100px rgba(0,0,0,0.14), 0 8px 24px rgba(0,0,0,0.06)',
        'product-sm': '0 16px 48px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)',
        inner:    'inset 0 1px 3px rgba(0,0,0,0.06)',
        none:     'none',
      },

      animation: {
        'fade-up':     'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':     'fadeIn 0.5s ease both',
        'slide-down':  'slideDown 0.25s cubic-bezier(0.16,1,0.3,1) both',
        'float':       'float 6s ease-in-out infinite',
        'pulse-slow':  'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite',
      },

      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      },

      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16,1,0.3,1)',
      },
    },
  },
  plugins: [],
}
