/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#189CAB',
        "dark-blue": '#062D3E',
        orange: '#ED5C01',
        yellow: '#FBBD08',
        "light-yellow": "#EBE3CC"
      },
      backgroundImage: {},
      content: {
        'arrow': "url('./src/assets/hero/arrow.png')",
        'spark': "url('./src/assets/hero/spark.png')",
      },
    },
  },
  plugins: [],
}