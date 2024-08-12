/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "rgb(50, 47, 47, <alpha-value>)",
        background: "rgb(245, 245, 245, <alpha-value>)",
        primary: "rgb(48, 206, 177,<alpha-value>)"
      }
    },
  },
  plugins: [],
}

