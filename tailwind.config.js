/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "m-3xl": { max: "1536px" },
      "m-2xl": { max: "1367px" },
      "m-xl": { max: "1281px" },
      "m-lg": { max: "1024px" },
      "m-md": { max: "768px" },
      "m-sm": { max: "640px" },
    },
  },
  plugins: [],
});
