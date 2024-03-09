/** @type {import('tailwindcss').Config} */
import * as colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: colors.black,
      "dark-grey": "#121212",
      "medium-grey": "#282828",
      "light-grey": "#A7A7A7",
      white: colors.white,
      "spotify-green": "#1abc54",
      transparent: colors.transparent,
    },
    extend: {},
  },
  plugins: [],
};
