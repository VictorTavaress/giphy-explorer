/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: ['bg-red-600/80', 'bg-black/80', 'text-white', 'text-red-600'],
  plugins: [],
};
