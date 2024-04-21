/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["FirstPage.html", "TST.html", "TST2.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

