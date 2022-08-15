/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: "446px",
      sm: "640px",
      md: "768px",
      lmd: "924px",
      lg: "1024px",
      xl: "	1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        violet: "#8464C9",
        yellowish: "#fac960",
        darkgrey: "#7A7B7E",
        verylightpurple: "#E1DBE6",
        silver: "#AFB3B3",
        incomegreen: "#2ecc71",
        expensered: "#c0392b",
      },
    },
  },
  plugins: [],
};
