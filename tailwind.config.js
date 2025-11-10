/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tcm: ['"Noto Serif SC"', "serif"],
      },
    },
  },
  plugins: [],
};
