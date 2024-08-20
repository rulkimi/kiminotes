/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "rgb(var(--text), <alpha-value>)",
        background: "rgb(var(--background), <alpha-value>)",
        primary: "rgb(48, 206, 177, <alpha-value>)"
      }
    },
  },
  plugins: [],
}

