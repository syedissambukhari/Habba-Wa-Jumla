/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plusjakartasans: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        "custom-1": "0px 0px 0px 0.5px #00000008",
        "custom-2": "0px 5px 25px 0px #0B5D5180",
      },
    },
  },
  plugins: [],
};
