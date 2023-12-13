/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flow: {
          '0%' : { transform: 'translate(-10%)' },
          '100%': { transform: 'translate(-200%)' },
        },
        flow2: {
          '0%' : { transform: 'translate(80%)' },
          '100%': { transform: 'translate(-100%)' },
        }
      },
      animation: {
        flow: 'flow 200s linear infinite ',
        flowDelay: 'flow2 200s linear infinite '
      },
      backgroundImage: {
        'hero-pattern': "url('./image/cloud.png')",
        'map': "url('./image/binFinder-map.png')"
      }
    },
  },
  plugins: [require('daisyui')],
}

