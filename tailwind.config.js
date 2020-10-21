const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"]
  },
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          "900": "#143c52"
        }
      }
    }
  },
  variants: {
    borderWidth: ({ after }) => after(["first", "last"]),
    borderRadius: ({ after }) => after(["first", "last"]),
    margin: ({ after }) => after(["first", "last"]),
    textColor: ({ after }) => after(["first", "last"]),
    backgroundColor: ({ after }) => after(["odd", "even"])
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
};
