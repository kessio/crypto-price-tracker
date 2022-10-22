/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4369B2',
        light: '#5989E7',
        nav: '#4369B2',
        dark: '#3B5A9A',
        lightCard: '#4369B0',
        darkCard: '#3F62A4',
      },
    },
    fontFamily: {
      lato: ['lato', 'sans-serif'],
    },

  },
  plugins: [],
};
