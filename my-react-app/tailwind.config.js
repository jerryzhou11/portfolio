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
      keyframes: {
        'line-shift': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'line-jump': {
          '0%': { transform: 'translateX(-100%)' },
          '45%': { transform: 'translateX(-20%)' },
          '45.1%': { transform: 'translateX(-20%) translateY(0px)' },
          '45.2%': { transform: 'translateX(-20%) translateY(120px)' },
          '45.3%': { transform: 'translateX(-20%) translateY(120px)' },
          '100%': { transform: 'translateX(100%) translateY(120px)' }
        }
      },
      animation: {
        'line-shift': 'line-shift 150ms linear',
        'line-jump': 'line-jump 150ms linear'
      }
    },
  },
  plugins: [],
}

