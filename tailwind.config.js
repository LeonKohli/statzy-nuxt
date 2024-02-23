/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "statzy-dark": "#0f172a",
        "statzy-dim": "#1e293b",
        "statzy-darkgray": "#6b7280",
        "statzy-gray": "#272f40",
        "statzy-lightgray": "#686d79",
        "statzy-white": "#ffffff",
        "statzy-blue": "#1c64f2",
        "statzy-dark-blue": "#2563eb",
        "statzy-dim-blue": "#1d4ed8",
        "statzy-red": "#ff0000",
        "statzy-dim-red": "#dc2626",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

