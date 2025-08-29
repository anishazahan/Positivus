/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables dark mode with .dark class
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#F3F3F3",
        dark: "#191A23",
        // background: "#ffffff",
        // foreground: "#111111",
        // border: "#e5e7eb",
        // muted: "#f5f5f5",
        // "muted-foreground": "#6b7280",
        primary: "#B9FF66",
        // "primary-foreground": "#ffffff",
        "positivus-green": "#00C853",
        "positivus-dark": "#1B1B1B",
      },
    },
  },
  plugins: [],
}
