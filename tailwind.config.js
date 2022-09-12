/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwind-scrollbar-hide")],
  theme: {
    screens: {
      xxsm: "360px",
      xsm: "446px",
      sm: "640px",
      md: "768px",
      lmd: "924px",
      lg: "1024px",
      xl: "	1280px",
      xxl: "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://cdn.vectorstock.com/i/1000x1000/29/36/polka-dot-background-seamless-pattern-purple-dot-vector-4082936.webp')",
      },
      gridTemplateRows: {
        layout: "48% 48%",
        mainlayoutsmall: "30% 70%",
        itemsandform: "10% 35% 52%",
        itemsandformresponsive: "10%,85%,10%",
      },
      gridTemplateColumns: {
        layout: "15% 85%",
        mainlayout: "40% 60%",
        item: "99% 1%",
      },
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
