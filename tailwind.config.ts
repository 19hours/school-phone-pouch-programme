import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0b3b75",
          light: "#e7f1ff",
          green: "#2f7a5d",
          gold: "#f2c84b",
        },
      },
      boxShadow: {
        card: "0 20px 50px -24px rgba(15, 23, 42, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
