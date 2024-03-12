/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        platinum: '#E0E1DD',
        silverblue: '#778DA9',
        blue: '#415A77',
        darkblue: '#1B263B',
        black: '#0D1B2A',
      },
      backgroundImage: () => ({
        'custom-bg':
          'url(https://images.pexels.com/photos/1154504/pexels-photo-1154504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }),
      backgroundSize: {
        'size-contain': 'contain',
      },
      backgroundAttachment: {
        fixed: 'fixed',
      },
    },
  },
  plugins: [],
};
