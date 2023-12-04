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
          '100%': { transform: 'translate(-100%)' },
        }
      },
      animation: {
        flow: 'flow 100s linear infinite'
      },
      backgroundImage: {
        'hero-pattern': "url('./image/cloud.png')"
      }
    },
  },
  plugins: [require('daisyui')],
}

