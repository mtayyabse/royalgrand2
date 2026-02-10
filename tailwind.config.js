/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",    // dark/navy
        accent: "#c19b76",     // gold
        bg: "#f8fafc",         // light background
        textDark: "#1e293b",   // dark text
        textLight: "#f1f5f9"   // light text on dark
      },
    },
  },
  plugins: [],
}
