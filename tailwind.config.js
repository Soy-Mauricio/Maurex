/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorCard: {
          DEFAULT: '#E3E1D9',
        },
      },
    },
  },
  plugins: [],
}

