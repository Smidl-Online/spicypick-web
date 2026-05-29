import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a14",
        surface: "#14142a",
        spicy: {
          50: "#fff1ed",
          100: "#ffe0d4",
          200: "#ffb89d",
          300: "#ff8c64",
          400: "#ff6b35",
          500: "#ff3b3b",
          600: "#e02020",
          700: "#b91515",
          900: "#7c1010",
        },
        neon: {
          pink: "#ec4899",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 12px rgba(255,59,59,0.4)" },
          "100%": { boxShadow: "0 0 24px rgba(255,59,59,0.7), 0 0 36px rgba(236,72,153,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
