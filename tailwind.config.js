const defaultTheme = require('tailwindcss/defaultTheme');

// Semantic colours are CSS variables (see src/index.css) so light/dark themes
// swap in one place and components never need `dark:` colour overrides.
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: token('canvas'),
        surface: token('surface'),
        fg: token('fg'),
        muted: token('muted'),
        line: token('line'),
        field: token('field'),
        accent: {
          DEFAULT: token('accent'), // text, icons, links
          2: token('accent-2'), // second stop for subtle gradients
          solid: token('accent-solid'), // button fills
          on: token('on-accent'), // text on accent-solid
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        content: '75rem',
      },
      boxShadow: {
        lift: '0 24px 48px -24px rgb(var(--color-shadow) / 0.45)',
        glow: '0 10px 30px -12px rgb(var(--color-accent-solid) / 0.5)',
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '100%': { transform: 'translate3d(4%, 6%, 0) scale(1.08)' },
        },
        caret: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 22s ease-in-out infinite alternate',
        'drift-slow': 'drift 30s ease-in-out infinite alternate-reverse',
        caret: 'caret 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
