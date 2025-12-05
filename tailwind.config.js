/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'safaricom-red': '#e60000',
        'safaricom-green': '#00A859',
        'brand-background': '#F8F9FA',
        'brand-text': '#1A202C',
      },
      fontFamily: {
        sans: [''Roboto'', ''sans-serif''],
      },
    },
  },
  plugins: [],
};