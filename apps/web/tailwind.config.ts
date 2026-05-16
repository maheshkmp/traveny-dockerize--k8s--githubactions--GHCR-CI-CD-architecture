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
          navy: '#0F2340',
          navyMid: '#1A3557',
          navyLight: '#243F66',
          cream: '#FAF7F2',
          sand: '#F0EAE0',
          warm: '#E8DFD0',
          muted: '#8A7E6E',
          body: '#3D3228',
          dark: '#1A0F0A',
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
