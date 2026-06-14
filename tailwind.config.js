/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pond: {
          blue: '#0F2C59',
          orange: '#FF9B50',
          accent: '#00F2FE',
          dark: '#030712',
          light: '#F8FAFC',
        }
      }
    },
  },
  plugins: [],
}
