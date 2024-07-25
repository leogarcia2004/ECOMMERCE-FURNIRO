/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagem_homepage': "url('./src/assets/home/imagem_home_page.png')",
        'image_demostracao': "url('./src/assets/imagem_apresentacao.png')",
      },
      height: {
        '90':'380px',
        '180':'500px'
      },
      colors: {
        'pink_fundo': '#FCF8F3'
      }
    },
  plugins: [],
  }
}

