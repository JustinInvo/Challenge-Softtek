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
    },
  },
  plugins: [],
}