/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        midnight: {
          50:  '#f0f4ff',
          100: '#e0e9ff',
          200: '#c2d3ff',
          300: '#9ab5ff',
          400: '#6b8eff',
          500: '#4361ee',
          600: '#2d46d6',
          700: '#2035ae',
          800: '#1a2b8a',
          900: '#16246e',
          950: '#0a0f2e',
        },
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        surface: {
          DEFAULT: '#080d1f',
          card:    '#0d1428',
          border:  '#1c2545',
          hover:   '#111830',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
        '7xl': ['4.5rem', { lineHeight: '1.02' }],
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease forwards',
        'fade-in':    'fadeIn 0.5s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern':    "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231c2545' fill-opacity='0.4'%3E%3Cpath d='M0 0h1v40H0zM40 0h1v40h-1zM0 0h40v1H0zM0 40h40v1H0z'/%3E%3C/g%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'glow-sm':  '0 0 20px rgba(99, 102, 241, 0.15)',
        'glow-md':  '0 0 40px rgba(99, 102, 241, 0.2)',
        'glow-lg':  '0 0 60px rgba(99, 102, 241, 0.25)',
        'card':     '0 1px 3px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
