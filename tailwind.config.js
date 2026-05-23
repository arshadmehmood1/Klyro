/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",       // Dark navy
        accent: "#3B82F6",        // Bright blue
        "accent-light": "#EFF6FF", // Very light blue
        "text-dark": "#1F2937",   // Near black
        "text-light": "#6B7280",  // Grey
        success: "#10B981",       // Green
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
}

