module.exports = {
  purge: [],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        body: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
				"Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
				sans-serif`,
      },

      colors: {
        neonblue: {
          DEFAULT: "#5a61f9",
        },
        lavender: {
          100: "#e3dcff",
          DEFAULT: "#ee99e5",
        },
        skylight: {
          DEFAULT: "#C0FAFF",
        },
        charade: {
          DEFAULT: "#282a36",
        },
        blackrussian: {
          DEFAULT: "#21232d",
        },
      },
      boxShadow: {
        carbon: "rgb(0 0 0 / 55%) 0px 20px 68px",
      },
    },
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1440px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
