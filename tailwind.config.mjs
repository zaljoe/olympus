/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#ece4d2',
        bone: '#f4ecde',
        ink: '#16222a',
        'ink-2': '#1f2f37',
        teal: '#24434a',
        gold: '#b8864a',
        'gold-2': '#c9a35b',
        'gold-soft': '#d9b675',
        rust: '#a05a2c',
        muted: '#6b6253',
        rule: '#cdc3ac',
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", 'serif'],
        serif: ["'Fraunces'", "'EB Garamond'", 'Georgia', 'serif'],
        sans: ["'Inter Tight'", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono'", 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
