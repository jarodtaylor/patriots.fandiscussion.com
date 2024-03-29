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
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "4rem",
      "6xl": "5rem",
      "7xl": "6rem",
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "last"],
  },
  plugins: [],
}
