/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6FAFC",
        secondary: {
          DEFAULT: "#A9C9A6",
          sage: "rgb(165 182 150 / 0.35);",
        },
        calltoaction: "#9CFC97",
        linkedin: "#0072b1",
        github: "#f5f5f5",
        
      },

      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
      },

      height: {
        section: 'calc(100% - 75px)'
      },

      dropShadow: {
        white: "0 2px 3px white",
        calltoaction: "0px 2px 3px black"
      },

      boxShadow: {
        custom: "0 0 15px 5px rgba(150, 150, 150, 0.5)"
      }
    },
  },
  plugins: [],
};
