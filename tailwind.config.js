/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 
        "mobile": "url('/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        "barlow": ['Barlow Condensed', 'sans-serif'],
        "bellefair": ['Bellefair', 'serif']
      }
    },
    screens: {
      "md": "680px",
      "laptop": "1024px",
      "lg": "1280px",
    },
  plugins: [],
}
}