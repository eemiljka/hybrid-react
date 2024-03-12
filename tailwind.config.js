/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'platinum': '#E0E1DD',
        'silverblue': '#778DA9',
        'blue': '#415A77',
        'darkblue': '#1B263B',
        'black': '#0D1B2A',
      },
    },
  },
  plugins: [],
};
