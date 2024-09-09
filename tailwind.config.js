/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#0C3623",
        "secondary": "#80bc7c",
        "tertiary": "#C16E49",
        "white": "#EEF0E5",
        "gray": "#e0dcdc",
      },
      fontFamily: {
        "poppins": ['Poppins' , 'sans-serif'],
        "dm-serif": ['DM Serif Text' , 'serif'],
      },
    },
  },
  plugins: [],
}