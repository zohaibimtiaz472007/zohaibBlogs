

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-blue': '#1e3a8a',
        'custom-purple': '#7c3aed',
      },
    },
  },
  plugins: [],
}