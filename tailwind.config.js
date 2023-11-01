/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        purpleDark: "#692dca",
        bluey: "#42AEE8",
        react: "#37c7ed",
        reactLight: "#61dbfb",
        node: "#4DB33D"
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);",
      },
      dropShadow: {
        textBlue: "0 8px 0 #86cbf0",
        textBlueDark: "0 8px 0 #42AEE8",
        textBlueSm: "3px 4px 0 #86cbf0",
        textBlueDarkSm: "3px 4px 0 #42AEE8",
        // textPurpleMd: '0 4px 0 #c3a5f5',
        textBlueHome: "4px 6px 0 #86cbf0",
        textBlueHomeDark: "4px 6px 0 #42AEE8",
        textBlueHomeMd: "3px 4px 0 #86cbf0",
        textBlueHomeDarkMd: "3px 4px 0 #42AEE8",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      slg: { max: "1198px" },
      // => @media (max-width: 1198px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
    },
  },
  plugins: [],
};
