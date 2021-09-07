module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "80vh": "80vh",
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      letterSpacing: ["hover"],
      invert: ["hover"],
    },
  },
  plugins: [],
};
