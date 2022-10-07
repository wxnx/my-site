/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte}"], theme: {
  extend: {fontFamily: {
    'Montserrat': ["'Montserrat'", 'sans-serif'],
    'Oswald': ["'Oswald'" ,'sans-serif'],
  },},
},
plugins: [
  require("daisyui")
],
daisyui: {
  styled: true,
  themes: true,
  base: true,
  utils: true,
  logs: true,
  rtl: false,
  prefix: "",
  darkTheme: "light",
},
}