/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1020',
          light: '#151b31',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,.05)',
          hover: 'rgba(255,255,255,.08)',
          border: 'rgba(255,255,255,.12)',
          'border-hover': 'rgba(255,255,255,.2)',
        },
        brand: {
          500: '#6366f1',
          600: '#8b5cf6',
          start: '#6366f1',
          end: '#8b5cf6',
        },
        warm: {
          amber: '#f59e0b',
          coral: '#fb7185',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        'brand-gradient-text': 'linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd)',
        'warm-gradient': 'linear-gradient(135deg, #f59e0b, #fb7185)',
      },
    },
  },
  plugins: [],
};
