/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fcc304",
          200: "#FFB23F",
         
    },
    green: "#286F6C",
    orange: "#ec7c34",
    brownNew: "#f49034",
   
  },
  backgroundImage: {
    hero: 'url("/src/assets/img/hero-bg.png")',
    newsletter: 'url("/src/assets/img/newsletter.png")',
  },
  variants: {},
},
  },
  plugins: [],
}