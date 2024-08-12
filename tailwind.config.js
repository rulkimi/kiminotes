/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(245, 245, 245, <alpha-value>)",
        primary: "rgb(48, 206, 177,<alpha-value>)"
      }
    },
  },
  plugins: [],
}

