import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        errorShake: {
          "0%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1px)" },
          "50%": { transform: "translateX(1px)" },
          "75%": { transform: "translateX(-1px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        errorShake: "errorShake .2s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
