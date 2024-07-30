/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-orange": "RGB(227, 107, 70)",
        "custom-bg": "#E2E1DF",
        "custom-bg-dark": "#1F1E0A",
        "custom-text-dark": "#E3E3E3",
      },
      rotate: {
        270: "270deg",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      whiteSpace: {
        nowrap: "nowrap",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".vertical-rl": {
          "writing-mode": "vertical-rl",
        },
        ".whitespace-nowrap": {
          "white-space": "nowrap",
        },
      });
    },
  ],
};
