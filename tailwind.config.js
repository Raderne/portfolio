/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#0F1B39",
        gray: {
          1: "#E4E4E4",
        },
        bgBlack: "#0d0e0e",
      },
    },
  },
  plugins: [],
};
