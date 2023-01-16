/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        archivo: "Archivo",
        latoLight: "LatoLight",
        latoBold: "LatoBold",
        latoReg: "LatoReg",
      }
    },
  },
  plugins: [],
}