/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js}",
    "./y9/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'results': "url('/results.png')",
      },
      colors: {
        'salmon': '#f8806c',
      },
    },
  },
  plugins: [],
}

