const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        portfolio: {
          50: '#0B132B',
          100: '#FFEEF2',
          200: '#FA7E61',
          300: '#5AB1BB',
          400: '#4B8F8C',
          500: '#70798C',
        }
      }
    },
  },
  plugins: [],
}
