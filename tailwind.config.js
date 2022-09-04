/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1280px",
      xl: "1440px",
    },
    colors: {
      ...colors,
      primary: "#47B100",
      secondary: "#05cb5b",
      white: "#f0f0f0",
      black: "#211a1d",
      grey: "#5f6165",
      "white-default": "#fff",
    },
    fontFamily: {
      header: ["Anton", "sans-serif"],
      sans: ["Roboto", "sans-serif"],
      serif: ["Arvo", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
