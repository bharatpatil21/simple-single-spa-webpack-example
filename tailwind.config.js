module.exports = {
  purge: ["src/**/*.js", "src/**/*.jsx", "public/**/*.html"],
  theme: {
    inset: {
      "0": 0,
      "1/2": "50%",
    },
    extend: {
      backgroundColor: (theme) => ({
        primary: "#68d391",
        secondary: "#48bb78",
        tertiary: "#38a169",
        light: "#ffffff",
      }),
      borderColor: (theme) => ({
        primary: "#68d391",
        secondary: "#48bb78",
        tertiary: "#38a169",
      }),
      textColor: {
        primary: "#68d391",
        secondary: "#48bb78",
        tertiary: "#38a169",
        light: "#ffffff",
      },
    },
  },
  variants: {},
  plugins: [],
};
