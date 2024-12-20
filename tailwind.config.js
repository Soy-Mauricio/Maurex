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
        },
      },
      backgroundImage: {
        'custom-svg': "url('./public/assets/Img/FondoUno.svg')",
      },
    },
  },
  plugins: [],
}

