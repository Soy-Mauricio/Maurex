/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorAction: {
          ACTION: '#3700ff',
          TITTLE: '#080024',
        },
      },
      backgroundImage: {
        'custom-svg': "url('./public/assets/Img/FondoUno.svg')",
        'custom-svg-tres': "url('./public/assets/Img/FondoTres.svg')",
      },
    },
  },
  plugins: [],
}

