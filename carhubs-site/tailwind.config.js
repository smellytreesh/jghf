/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(222.2 47.4% 11.2%)",
        card: "hsl(0 0% 100%)",
        border: "hsl(214.3 31.8% 91.4%)",
        primary: "#2563eb",
        "primary-foreground": "#ffffff",
        "muted-foreground": "hsl(215.4 16.3% 46.9%)",
        input: "hsl(214.3 31.8% 91.4%)",
      }
    },
  },
  plugins: [],
}
