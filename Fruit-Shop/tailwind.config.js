/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      screens: {
        '3xl': '1760px',
        '4xl': '1920px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}