/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "pixelify": ['Pixelify Sans', 'serif'],
        "chomsky": ['Chomsky', 'sans-serif']
      },
      colors:{
        'purple': '#2E2157',
        'neon': '#2DE2E6',
        'electric': '#0496FF',
        'pink': '#FF00FF',
      },
    },
  },
  plugins: [],
}

