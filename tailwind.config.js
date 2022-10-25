/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FFB23F",
          200: "#FFA32F",
    },
   
  },
  backgroundImage: {
    hero: 'url("/src/assets/img/hero-bg.png")',
    newsletter: 'url("/src/assets/img/vin.jpg")',
  },
  variants: {},
},
  },
  plugins: [],
}