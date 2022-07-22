/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
       lightGray: 'hsl(0, 0%, 98%)',
       darkGrayishBlue: 'hsl(227, 12%, 61%)',
       darkBlue: 'hsl(233, 26%, 24%)',
       limeGreen: 'hsl(136, 65%, 51%)',
       brightCyan: 'hsl(192, 70%, 51%)',
       grayishBlue: 'hsl(233, 8%, 62%)',
       lightGrayishBlue: 'hsl(220, 16%, 96%)'
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'), 
    require("daisyui"),
  ],
}