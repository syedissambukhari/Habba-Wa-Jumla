/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        plusjakartasans: ["Plus Jakarta Sans", "sans-serif"],
        publicsans:["public sans","sans-serif"]
      },
      boxShadow: {
        "custom-1": "0px 0px 0px 0.5px #00000008",
        "custom-2": "0px 5px 25px 0px #0B5D5180",
      },
      screens: {
        "xs": "480px",  // Extra small devices (phones, etc.)
        "sm": "640px",  // Small devices (Tablets)
        "md": "768px",  // Medium devices (Small laptops)
        "lg": "1024px", // Large devices (Laptops)
        "xl": "1280px", // Extra large devices (Desktops)
        "2xl": "1536px", // Very large devices
        "3xl": "1920px", // Larger screens
      },

    },
  },
  plugins: [],
};
