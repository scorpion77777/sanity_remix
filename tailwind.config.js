/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */

const { theme } = require("@sanity/demo/tailwind");

module.exports = {
  theme: {
    
    container: {
      center: true,
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme,
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("tw-elements/dist/plugin.cjs"),
  ],
};
