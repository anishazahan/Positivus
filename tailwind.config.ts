/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        primary: "#B9FF66",
        "positivus-green": "#00C853",
        "positivus-dark": "#1B1B1B",

        // Gray 
        "gray-50": "#f9fafb",
        "gray-100": "#f3f4f6",
        "gray-200": "#e5e7eb",
        "gray-300": "#d1d5db",
        "gray-400": "#9ca3af",
        "gray-500": "#6b7280",
        "gray-600": "#4b5563",
        "gray-700": "#374151",
        "gray-800": "#1f2937",
        "gray-900": "#111827",

        // Lime 
        "lime-50": "#f7fee7",
        "lime-100": "#ecfccb",
        "lime-200": "#d9f99d",
        "lime-300": "#bef264",
        "lime-400": "#a3e635",
        "lime-500": "#84cc16",
        "lime-600": "#65a30d",
        "lime-700": "#4d7c0f",
        "lime-800": "#3f6212",
        "lime-900": "#365314",
      },
    },
  },
  plugins: [],
};
