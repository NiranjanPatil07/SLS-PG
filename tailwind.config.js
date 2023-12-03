/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          900: '#0e1013',
          800: '#17181B',
          700: '#202124',
          600: '#28212D',
          500: '#343a40',
          400: '#495057',
          300: '#868e96',
          200: '#ced4da',
          100: '#dee2e6',
        },
        white: {
          900: '#FFF',
          800: '#F8F9FA',
          700: '#F1F3FA',
          600: '#E8EAED',
          500: '#dee2e6',
          400: '#ced4da',
          300: '#adb5bd',
        },
      },
      fontFamily: {
        inter: 'Inter',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
