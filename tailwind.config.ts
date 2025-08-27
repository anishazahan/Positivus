import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#111111",
        border: "#e5e7eb",
        muted: "#f5f5f5",
        "muted-foreground": "#6b7280",

        primary: "#00C853", // Positivus green
        "primary-foreground": "#ffffff",
        "positivus-green": "#00C853",
        "positivus-dark": "#1B1B1B",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      borderRadius: {
        "3xl": "1.5rem",
        "2xl": "1rem",
        md: "0.375rem",
      },
      boxShadow: {
        lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
