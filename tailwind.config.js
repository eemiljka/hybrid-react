/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lion: '#A39171',
        columbia: '#C1DFF0',
        gunmetal: '#2B303A',
        cerulean: '#1282A2',
        pistachio: '#BCD979',
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
