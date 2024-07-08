import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["iAWriterQuattroS", "Noto Serif TC", ...defaultTheme.fontFamily.serif],
        mono: ["iAWriterMonoS", "Noto Sans TC", ...defaultTheme.fontFamily.mono],
        sans: ["iAWriterDuoS", "Noto Sans TC", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

