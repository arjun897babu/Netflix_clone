/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nsans-Light': ['Nsans Light'],
        'Nsans-medium': ['Nsans medium'],
        'Nsans-bold': ['Nsans bold']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
