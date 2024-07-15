/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        slg: "960px",
        mlg: "1200px",
      },
    },
  },
  plugins: [],
};
