/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    screens: {
      'xs': '375px',
      'md': '500px',
      'lg': '1440px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
    'LightCyan': 'hsl(193, 38%, 86%)',
    'NeonGreen': 'hsl(150, 100%, 66%)',
   ' GrayishBlue': 'hsl(217, 19%, 38%)',
    'DarkGrayishBlue': 'hsl(217, 19%, 24%)',
    'DarkBlue': 'hsl(218, 23%, 16%)',
    'LightNeonGreen': 'hsl(150, 100%, 50%)',
      },
      fontFamily:{
        manrope:['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
