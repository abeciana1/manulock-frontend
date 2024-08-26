/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F8F9FA',
          DEFAULT: '#2E2E2E',
        },
        accent: {
          red: '#F64740',
          yellow: '#F9C80E',
          green: '#31E981',
          blue: '#0E79B2',
        },
        neutral: {
          light: '#E0E0E0',
          medium: '#BDBDBD',
          dark: '#616161',
        },
        shadow: {
          light: 'rgba(46, 46, 46, 0.1)',
          medium: 'rgba(46, 46, 46, 0.25)',
          dark: 'rgba(46, 46, 46, 0.5)',
        },
        font: {
          primary: '#2E2E2E', // Soft Black
          secondary: '#616161', // Dark Gray
          accent: '#F8F9FA', // White
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
