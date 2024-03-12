/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        platinum: '#1F2421',
        silverblue: '#546A7B',
        blue: '#62929E',
        darkblue: '#216869',
        black: '#1F2421',
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
