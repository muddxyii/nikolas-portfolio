import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#6366f1',
        'secondary': '#9ca3af',
        'accent': '#f472b6',
        'background': '#f9fafb',
        'foreground': '#1e293b',
        'muted': '#64748b',
      },
    },
  },
  plugins: [],
} satisfies Config;
