import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "lm-green": "#008D53",
      },
      backgroundImage: {
        "g-to-wine": "linear-gradient(56.8deg, #000000 39.67%, #41013B 137.58%)",
        "g-to-green": "linear-gradient(56.8deg, #000000 39.67%, #142D22 137.58%)",
        "g-to-grey": "linear-gradient(216.17deg, #12B669 -1.15%, #999999 112.54%)",
      },
      maxWidth: {
        "container-1140": "1140px",
      },
    },
  },
  plugins: [],
};

export default config;
