/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "ungu-muda": '#E6D6FC',
        "ungu-tua": '#883AE1',
        "abu-muda": '#E5EAF0',
        "abu-tua": '#6C727F'
      },
      backgroundColor: {
        "putih-gelap": 'FAFAF9' 
      },
      boxShadow: {
        "shadow": "0px 30px 100px 0px rgba(17, 23, 41, 0.05)"
      },
    },
  },
  plugins: [],
}