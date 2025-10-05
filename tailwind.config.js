/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your custom colors
        primary: '#2563eb',  // blue-600
        'primary-dark': '#1e40af', // blue-800
        secondary: '#facc15', // yellow-400
        brand: {
          DEFAULT: '#1D4ED8',
          light: '#3B82F6',
          dark: '#1E3A8A',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],

}
