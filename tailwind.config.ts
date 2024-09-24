import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#6495ED',
        'light-blue': '#daf0ff',
        'yellow': '#eda864',
        'white': '#fff',
      },
    },
  },
  plugins: [],
};
export default config;
