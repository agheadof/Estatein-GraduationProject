/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white90: "#e4e4e7",
        white95: "#f1f1f3",
        white97: "#f7f7f8",
        white99: "#fcfcfd",

        purple60: "#703bf7",
        purple65: "#8254f8",
        purple70: "#946cf9",
        purple75: "#a685fa",
        purple90: "#dbcefd",
        purple95: "#ede7fe",
        purple97: "#f4f0fe",
        purple99: "#fbfaff",

        gray08: "#141414",
        gray10: "#1a1a1a",
        gray15: "#262626",
        gray20: "#333333",
        gray30: "#4d4d4d",
        gray40: "#666666",
        gray50: "#808080",
        gray60: "#999999",
        gray65: "#f7f7f7",
        gray70: "#141414",
        gray75: "#d4d4d8",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
      screens: {
        "lg-custom": "992px",
        huge: "1921px",
      },
    },
  },
  plugins: [],
}
