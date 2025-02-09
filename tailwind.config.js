module.exports = {
  purge: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      height: {
        "90vh": "90vh",
      },
      colors: {
        "link-blue": "#564dc1",
        brand: "#01295b",
      },
    },
    fontSize: {
      base: "1vw",
      lg: "1.25vw  ",
    },
    // fontSize: {
    //   xs: ".75rem",
    //   sm: ".875rem",
    //   base: "1rem",
    //   lg: "1.5rem",
    //   xl: "2rem",
    //   "2xl": "2.5rem",
    //   "3xl": "3rem",
    //   "4xl": "3.5rem",
    //   "5xl": "4rem",
    //   "6xl": "4.5rem",
    //   "7xl": "5rem",
    // },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "last"],
  },
  plugins: [],
}
