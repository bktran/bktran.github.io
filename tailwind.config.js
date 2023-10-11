/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E6FAFC",
        secondary: {
          DEFAULT: "#A9C9A6",
          sage: "#A5B696",
        },
        calltoaction: "#9CFC97",
        linkedin: "#0072b1",
        github: "#f5f5f5",
      },

      fontFamily: {
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
