// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/vite")()],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        dark: "#0f172a",
      },
    },
  },
};
