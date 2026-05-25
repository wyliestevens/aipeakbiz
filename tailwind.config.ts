import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm light background palette
        background: "#FAFAF8",
        "background-alt": "#F3F1EE",
        surface: "#FFFFFF",
        "surface-alt": "#F7F5F2",

        // Navy/slate text hierarchy
        "text-primary": "#1B2A4A",
        "text-secondary": "#4A5568",
        "text-muted": "#8B95A5",

        // Brand accent - warm navy blue (trustworthy, calm)
        brand: {
          DEFAULT: "#2B5BA8",
          light: "#3B6DC0",
          dark: "#1E4080",
          50: "#EEF2F9",
          100: "#D4DEF0",
          500: "#2B5BA8",
          600: "#1E4080",
          700: "#163060",
        },

        // Warm accent - for trust signals
        warm: {
          DEFAULT: "#C27C3E",
          light: "#D4944F",
          50: "#FDF6EE",
        },

        // Success / positive
        success: "#2D8659",
        "success-light": "#EBF5F0",

        // Border
        border: "#E5E2DD",
        "border-light": "#F0EDE8",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        display: "-0.02em",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "scroll-x": "scroll-x 30s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [typography],
};
export default config;
