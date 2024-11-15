const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#122347",
        third: "#171a459e",
        four: "#1c3b6d",
        fifth: "#e8ebf0",

      },
      fontFamily: {
        sans: ['"mont"', ...defaultTheme.fontFamily.sans],
        badScript: ['"badScript"', ...defaultTheme.fontFamily.sans],
        mont: ['"montregular', ...defaultTheme.fontFamily.sans],
        birthstone: ['"birthstone', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
