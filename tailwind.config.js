/** @type {import('tailwindcss').Config} */
// Design system: "Scholar's dossier on ink". Every colour is a CSS variable defined in app/globals.css
// (dark = :root default, light = html.light), so theme switching never needs a `dark:` variant.
// Class names: bg-bg, bg-surface, text-fg, text-muted, text-faint, border-line, border-line-strong,
// text-accent, bg-accent, text-accent-on, hover:text-accent-hover, ring/outline-focus.
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        // Ten nav links need about 1000px of bar width, measured in a browser; below this the Menu button is shown.
        nav: '70rem',
      },
      colors: {
        bg: 'var(--bg)',
        surface: {
          DEFAULT: 'var(--surface)',
        },
        line: {
          DEFAULT: 'var(--line)', // decorative hairlines
          strong: 'var(--line-strong)', // UI boundaries (inputs, outlined buttons), >= 3:1
        },
        fg: 'var(--text)',
        muted: 'var(--text-muted)',
        faint: 'var(--text-faint)',
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
          on: 'var(--on-accent)',
        },
        focus: 'var(--focus)',
      },
      fontFamily: {
        serif: ['var(--ff-serif)'],
        ui: ['var(--ff-ui)'],
        sans: ['var(--ff-ui)'],
        mono: ['var(--ff-mono)'], // system monospace; only for code-like strings
      },
      maxWidth: {
        site: '68rem', // page container
        measure: '42rem', // reading column (about 68ch)
      },
      transitionTimingFunction: {
        out: 'var(--ease-out)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '160ms',
        slow: '200ms',
      },
    },
  },
  plugins: [],
};
