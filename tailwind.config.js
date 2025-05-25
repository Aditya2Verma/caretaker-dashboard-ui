/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",     // Blue
        secondary: "#1E293B",   // Dark gray
        accent: "#22C55E",      // Green
        warning: "#F59E0B",     // Amber
        danger: "#EF4444",      // Red
        background: "#F9FAFB",  // Light gray
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        card: "0 4px 6px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),     // Nice form styles
    require('@tailwindcss/typography') // For better readability
  ],
};
