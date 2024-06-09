import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#eeeeee",
        dark: "#0f0e13",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "light-pattern":
          "radial-gradient(at 0% 0%, hsla(253, 100%, 95%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 100%, 85%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339, 100%, 85%, 1) 0, transparent 50%)",
        "dark-pattern":
          "radial-gradient(at 0% 0%, hsla(253, 16%, 7%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
