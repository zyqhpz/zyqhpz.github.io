/** @type {import('tailwindcss').Config} */
import { colors } from 'tailwindcss/colors'
export default {
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
        docker: {
          DEFAULT: "#0DB7ED",
        },
        aws: {
          DEFAULT: "#FF9900",
        },
        nextjs: {
          DEFAULT: "#171717",
        },
        firebase: {
          DEFAULT: "#F5820D",
        },
      },
    },
  },
  plugins: [],
}

