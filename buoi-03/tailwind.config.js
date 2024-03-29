/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        788: '788px',
        322: '322px',
      },
      colors: {
        "brand-primary": "#ffce00"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}