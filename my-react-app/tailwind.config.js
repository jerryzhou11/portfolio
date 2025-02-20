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
        'static-up': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-150px)' }
        },
        'static-down': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(150px)' }
        },
        'glitch-copy-1': {
          '0%': { 
            transform: 'translate(0)',
            opacity: 0.7,
            filter: 'hue-rotate(90deg)'
          },
          '33%': { 
            transform: 'translate(-18px, 15px)',
            opacity: 0.7,
            filter: 'hue-rotate(90deg)'
          },
          '66%': { 
            transform: 'translate(18px, -15px)',
            opacity: 0.7,
            filter: 'hue-rotate(90deg)'
          },
          '100%': { 
            transform: 'translate(0)',
            opacity: 0.7,
            filter: 'hue-rotate(90deg)'
          }
        },
        'glitch-copy-2': {
          '0%': { 
            transform: 'translate(0)',
            opacity: 0.5,
            filter: 'hue-rotate(180deg)'
          },
          '33%': { 
            transform: 'translate(18px, 18px)',
            opacity: 0.5,
            filter: 'hue-rotate(180deg)'
          },
          '66%': { 
            transform: 'translate(-18px, -13px)',
            opacity: 0.5,
            filter: 'hue-rotate(180deg)'
          },
          '100%': { 
            transform: 'translate(0)',
            opacity: 0.5,
            filter: 'hue-rotate(180deg)'
          }
        },
        'glitch-copy-3': {
          '0%': { 
            transform: 'translate(0)',
            opacity: 0.3,
            filter: 'hue-rotate(270deg)'
          },
          '33%': { 
            transform: 'translate(-15px, -18px)',
            opacity: 0.3,
            filter: 'hue-rotate(270deg)'
          },
          '66%': { 
            transform: 'translate(15px, 18px)',
            opacity: 0.3,
            filter: 'hue-rotate(270deg)'
          },
          '100%': { 
            transform: 'translate(0)',
            opacity: 0.3,
            filter: 'hue-rotate(270deg)'
          }
        }
      },
      animation: {
        'static-up': 'static-up 150ms linear',
        'static-down': 'static-down 150ms linear',
        'glitch-copy-1': 'glitch-copy-1 400ms steps(2, jump-none)',
        'glitch-copy-2': 'glitch-copy-2 400ms steps(2, jump-none)',
        'glitch-copy-3': 'glitch-copy-3 400ms steps(2, jump-none)'
      }
    },
  },
  plugins: [],
}

