/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Gabarito', 'sans-serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

