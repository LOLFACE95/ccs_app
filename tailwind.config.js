/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      'repair': "url('/images/naprawa.png')",
      colors: {
        emerald: 'var(--darkEmerald)',
        ourGray: 'var(--ourGray)',
        darkEmerald: 'var(--darkEmerald)',
        emeraldDark: 'var(--emeraldDark)'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.before-content': {
          content: '"NAJLEPSZA OFERTA"',
        },
      }, ['before']);
    }),
  ],
};