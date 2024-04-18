/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-03": "#070708",
        "dark-06": "#0e0e10",
        "dark-08": "#131316",
        "dark-12": " #1c1c21",
        "dark-15": "#232329",
        "dark-20": "#2f2f37",
        "dark-25": "#3b3b45",
        "dark-30": "#474752",

        "cGrey-03": "#62646C",
        "cGrey-06": "#797C86",
        "cGrey-08": "#AFB0B6",
        "cGrey-12": " #CACACE",
        "cGrey-15": "#E4E4E6",
        "cGrey-20": "#F2F2F3",
        "cGrey-25": "#F7F7F8",
        "cGrey-30": "#FCFCFD",
      },
    },
  },
  plugins: [],
};
