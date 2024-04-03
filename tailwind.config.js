/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#E8EAEC',
          200: '#AAAAB3',
          300: '#E8EAEC',
          400: '#737373',
        },
        blue: {
          100: '#CBD9EC',
          200: '#4D9FFE',
        },
        orange: {
          100: '#FFF0EC',
          200: '#FF6F39',
          300: '#D3411C',
        },
        pink: '#EECFC9',
        violet: {
          100: '#C5D1FB',
          200: '#A3A8E0',
          300: '#702A72',
        },
      }
    },
  },
  plugins: [],
}