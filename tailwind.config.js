/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cinzaclaro: '#D9D9D9',
        cinzaclarinho: '#C6C6C6',
        azulescuro: '#4D7B9F',
        caramelo: '#CF9E76',
        azulbonito: '#5B85A5',
        azulclaro: '#9AB7CA',
        vermelho: '#D24E35'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

