module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // mode: "jit",
  theme: {
    extend: {
      transitionDelay: {
        50: "50ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
        350: "350ms",
        400: "400ms",
        450: "450ms",
        500: "500ms",
        550: "550ms",
        600: "600ms",
        650: "650ms",
        700: "700ms",
        750: "750ms",
        800: "800ms",
        850: "850ms",
        900: "900ms",
        950: "950ms",
        1000: "1000ms",
      },
      inset: {
        "1/2": "50%",
        "1/5": "20%",
      },
      boxShadow: {
        teal: "0 0 0 .2rem rgba(8, 86, 86, 0.43)",
      },
      padding: {
        72: "18rem",
        88: "22rem",
        96: "24rem",
        128: "32rem",
        "1/5": "20%",
      },
      colors: {
        black: "#1d1f20",
        red: {
          // hue: 0-0-quad-ease-in
          // saturation: 2-98-100-quad-ease-out
          // brightness: 100-20-quad-ease-out
          100: "#FFFAFA",
          200: "#FCD7D8",
          300: "#FAB5B6",
          400: "#EF7577",
          500: "#DD4447",
          600: "#C12326",
          700: "#9B0F11",
          800: "#690506",
          900: "#330102",
        },
        sunshine: {
          // hue: 40-40-quad-ease-in
          // saturation: 2-98-100-quad-ease-out
          // brightness: 100-40-quad-ease-in-out
          100: "#FFFDFA",
          200: "#FEF2D8",
          300: "#FDE6B7",
          400: "#F6CC79",
          500: "#E0AC45",
          600: "#926A1B",
          700: "#724F0B",
          800: "#684705",
          900: "#664502",
        },
        teal: {
          // hue: 180-180-quad-ease-in
          // saturation: 2-98-100-quad-ease-out
          // brightness: 100-20-quad-ease-in-out
          100: "#FAFFFF",
          200: "#D6FBFB",
          300: "#B2F6F6",
          400: "#6DDFDF",
          500: "#38B6B6",
          600: "#188282",
          700: "#085656",
          800: "#033C3C",
          900: "#013333",
        },
        blue: {
          // hue: 220-220-quad-ease-in
          // saturation: 2-98-100-quad-ease-out
          // brightness: 100-40-quad-ease-out
          100: "#FAFCFF",
          200: "#D7E4FD",
          300: "#B6CDFB",
          400: "#77A0F3",
          500: "#477CE5",
          600: "#265FD1",
          700: "#1148B4",
          800: "#07348F",
          900: "#022366",
        },
        gray: {
          100: "#eaebeb",
          200: "#d5d7d8",
          300: "#b7bbbd",
          400: "#92979b",
          500: "#72777b",
          600: "#62676a",
          700: "#4e5255",
          800: "#36393a",
          900: "#1d1f20",
        },
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    borderWidth: ({ after }) => after(["first", "last"]),
    borderRadius: ({ after }) => after(["first", "last"]),
    margin: ({ after }) => after(["first", "last"]),
    textColor: ({ after }) => after(["active", "first", "last"]),
    backgroundColor: ({ after }) => after(["active", "odd", "even"]),
    display: ({ after }) => after(["group-hover"]),
    opacity: ({ after }) => after(["group-hover"]),
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
