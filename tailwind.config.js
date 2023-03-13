/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
}
