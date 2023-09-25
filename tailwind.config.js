/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        haze: '#C8B4D0',
        purplehaze: '#BDB5C0',
        coffee: '#4C3D40'
      },
    },
  },
  plugins: [],
}

