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
        coffee: '#4C3D40',
        violet: '#D3B5E5'
      },
      screens: {
        'mobile-xs': {max: '320px'},
        'mobile-md': {max: '375px'},
        'mobile-lg': {max: '425px'},
      },
      zIndex: {
        999: 999
      },
      boxShadow: {
        'inner': 'inset -5px -5px 150px 10px #D3B5E5;',
      }
    },
  },
  plugins: [],
}

