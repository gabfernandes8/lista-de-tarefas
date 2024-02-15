/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./viewer/src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cinzaclaro: '#D9D9D9',
        cinzaclarinho: '#C6C6C6',
        azulescuro: '#4D7B9F',
        caramelo: '#CF9E76',
        azulbonito: '#5B85A5',
        azulmedio: '#719CBC',
        azulclaro: '#9AB7CA',
        azulclarinho: '#C8D8E3',
        vermelho: '#D24E35'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

