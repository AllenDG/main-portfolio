// tailwind.config.ts or tailwind.config.js
export default {
  darkMode: "class", // ← IMPORTANT
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
