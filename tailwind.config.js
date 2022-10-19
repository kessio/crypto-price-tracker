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
      },
    },
    fontFamily: {
      lato: ['lato', 'sans-serif'],
    },

  },
  plugins: [],
};
