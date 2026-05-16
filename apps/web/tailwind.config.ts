import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A84C",
          light: "#E8C87A",
          pale: "#FDF6E3",
          dark: "#A8892E"
        },
        brand: {
          white: "#FFFFFF",
          snow: "#FAFAF8",
          cream: "#F5F0E8",
          mist: "#EDE8DF",
          border: "#E2D9CC",
          muted: "#9A8F82",
          mid: "#6B6059",
          dark: "#2C2420",
          black: "#1A1108"
        }
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        dm: ["var(--font-dm)"]
      },
      fontSize: {
        display: ["5rem", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["7rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }]
      }
    }
  },
  plugins: []
};

export default config;
