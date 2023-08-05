const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        red: colors.rose,
        pink: colors.fuchsia,
        orange: colors.orange,
        laravel: {
          DEFAULT: "#F05340",
        },
        react: {
          DEFAULT: "#61DBFB",
        },
        go: {
          DEFAULT: "#29BEB0",
        },
        mongodb: {
          DEFAULT: "#589636",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  content: ["./node_modules/flowbite/**/*.js"],
};
