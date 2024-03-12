import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-blue": "#2A52BE",
        "custom-orange": "#e85d04",
        "custom-yellow": "#ffba08",
        "custom-agua": "#00b4d8",
        "custom-red": "#d90429",
        "custom-violet": "#b5179e",
        color6: "#ff00ff",
        color7: "#800000",
        color8: "#008000",
        color9: "#000080",
        color10: "#808000",
        color11: "#800080",
        color12: "#008080",
        color13: "#C0C0C0",
        color14: "#808080",
        color15: "#FF0000",
        color16: "#00FF00",
        color17: "#0000FF",
        color18: "#FFFF00",
        color19: "#00FFFF",
        color20: "#FF00FF",
      },
    },
  },
  plugins: [],
};
export default config;
