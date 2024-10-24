/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: 'linear-gradient(180deg, rgba(7,86,251,1) 0%, rgba(99,41,253,1) 37%, rgba(184,0,255,1) 100%);'
    },
  },
  plugins: [],
}


