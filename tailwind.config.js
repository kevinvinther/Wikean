/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#57BDB6",
        articleBodyText: "#282828",
        articleBodyLink: "#41BBD9",
      },
      fontFamily: {
        articleTitle: ["Rubik"],
        articleBody: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
}
