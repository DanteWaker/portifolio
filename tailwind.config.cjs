/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        white: {
          100: '#ffffff',
          500: '#F8F8F8',
        },
        gray: {
          500: '#292929',
        },
      },
    },
  },
  plugins: [],
};
