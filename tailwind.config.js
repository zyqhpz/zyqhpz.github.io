const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        // blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
        orange: colors.orange,
        // laravel logo color
        laravel: {
          DEFAULT: "#F05340",
        },
        // laravel-logo: '#f8b195',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  content: ["./node_modules/flowbite/**/*.js"],
};
