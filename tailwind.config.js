/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "40px",
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        primary: "#000000",
        secondary: "#EA3838",
        neutral: "#F6F6F6",
        myGray: "#888888",
        myOrange: "#E68E66",
        myYellow: "#F0C44A",
        myViolet: "#6E52EA",
        myBlue: "#4261EF",
        myGreen: "88B04B",
        mySkyBlue: "#53B0AE",
      },
    },
  },
  plugins: [],
};
