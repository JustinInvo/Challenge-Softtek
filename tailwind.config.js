/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      screens: {
        xs: "320px",
        xm: "375px",
        sm: "480px",
        sd: "650px",
        md: "768px",
        ml: "992px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1366px",
        "3xl": "1440px",
        "4xl": "1600px",
      },
      colors: {
        black: '#03050F',
        violet: '#CCD1EE',
        violet2: '#5E6488',
        violet3: '#4F4FFF',
        violet4: '#EDEFFC',
        green: '#389E0D',
        red: '#FF1C44'
      }
    },
  },
  plugins: [],
}