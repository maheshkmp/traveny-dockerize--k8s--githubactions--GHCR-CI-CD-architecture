import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: "#C9A84C", light: "#E8C87A", pale: "#F5EDD6" },
        brand: {
          black: "#0A0A0B",
          charcoal: "#141416",
          dark: "#1C1C1F",
          mid: "#2E2E33",
          muted: "#6B6B75",
          light: "#ADADB8",
          snow: "#FAFAFA"
        }
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        dm: ["var(--font-dm)"]
      }
    }
  },
  plugins: []
};

export default config;
