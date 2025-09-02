/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vaad-blue': '#1E40AF',
        'vaad-gradient-start': '#1E40AF',
        'vaad-gradient-end': '#9333EA',
      },
      gradientColorStops: {
        'vaad-gradient': ['#1E40AF', '#9333EA'],
      },
    },
  },
  plugins: [],
}