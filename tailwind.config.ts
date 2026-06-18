import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--wasla-background)",
        surface: "var(--wasla-surface)",
        card: "var(--wasla-card)",
        "card-foreground": "var(--wasla-card-foreground)",
        heading: "var(--wasla-heading)",
        body: "var(--wasla-body)",
        muted: "var(--wasla-muted)",
        border: "var(--wasla-border)",
        primary: {
          DEFAULT: "var(--wasla-primary)",
          hover: "var(--wasla-primary-hover)",
          foreground: "var(--wasla-primary-foreground)",
          soft: "var(--wasla-primary-soft)",
        },
        success: "var(--wasla-success)",
        warning: "var(--wasla-warning)",
        danger: "var(--wasla-danger)",
      },
      fontFamily: {
        display: ["Cairo", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans Arabic", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        full: "9999px",
      },
      boxShadow: {
        card: "0 1px 2px 0 rgb(15 23 42 / 0.04), 0 1px 3px 0 rgb(15 23 42 / 0.06)",
        "card-hover": "0 4px 12px -2px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.04)",
        popover: "0 8px 24px -4px rgb(15 23 42 / 0.12), 0 4px 8px -2px rgb(15 23 42 / 0.06)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(4px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.6" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.25s ease-out",
        "pulse-ring": "pulse-ring 1.6s cubic-bezier(0.4,0,0.6,1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
