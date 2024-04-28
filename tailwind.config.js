/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'ssm': '390px',
      },
    },
  },
  plugins: [],
}