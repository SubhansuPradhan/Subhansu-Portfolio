import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2F4F0",
        paper2: "#EAEDE7",
        gridline: "#DADFD6",
        ink: "#152029",
        inksoft: "#5A6470",
        inkfaint: "#8A9199",
        pen: "#33604F",
        pendeep: "#234438",
        highlight: "#F6CE3E",
        card: "#FBFBF8",
        rule: "#C9CFC3",
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      perspective: {
        "1000": "1000px",
        "1500": "1500px",
      },
    },
  },
  plugins: [],
};
export default config;
