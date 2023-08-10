/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        projectBlue: '#173F5F'
      },
      backgroundImage: {
        'HeaderImage':"url('./src/assets/images/MaskGroup.png')"
      },
      spacing: {
        'ebook':'555px'
      },
      fontFamily: {
        'bebas':['Bebas Neue']
      }
    },
  },
  plugins: [],
}