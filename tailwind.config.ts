import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'mainBg': '#101827',
      'secondBg': '#1f2937',
      'buttonBG': '#2463eb',
      'mainText': '#ced0d6',
      'secondaryText': '#6f7682',
      'white': '#ffffff',
      'thirdBg': '#374151'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': '790px',
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
export default config;
