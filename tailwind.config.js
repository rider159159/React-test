const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '376px',
      'md': '768px',
      'lg': '1280px',
      'xl':'1640px',
      'print': {'raw': 'print'},
    },
    colors: {
      transparent: "transparent",
      'primary': "#E95513",
      'primary-100': "#FFA279",
      'secondary': "#70B437",
      'secondary-100': "rgba(112, 180, 55, 0.5)",
      'info': "#3AB7DE",
      white: colors.white,
      black: "#1F1F1F",
      blue: colors.blue,
      yellow: colors.yellow,
      gray: colors.gray,
      red: colors.red,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
      circle:'circle',
      decimalLeadingZero:'decimal-leading-zero'
    }
  },
  plugins: [],
}