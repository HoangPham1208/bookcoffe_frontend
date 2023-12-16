/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", defaultTheme.fontFamily.sans],
        bookTitle: ["Playfair Display", defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        0: "0 0 0 0 rgba(0, 0, 0, 0",
        1: "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        2: "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        3: "0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)",
        4: "0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)",
        5: "0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)",
      },
      transitionTimingFunction: {
        "m3-standard": "cubic-bezier(0.2, 0.0, 0, 1.0)",
        "m3-standard-decelerate": "cubic-bezier(0, 0, 0, 1);",
        "m3-standard-accelerate": "cubic-bezier(0.3, 0, 1, 1);",
        "m3-emphasized": "cubic-bezier(0.2, 0.0, 0, 1.0)",
        "m3-emphasized-decelerate": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
        "m3-emphasized-accelerate": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
