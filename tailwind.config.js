/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#DDE6ED',
          100: '#9DB2BF',
          200: '#526D82',
          300: '#27374D',
        },
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242'
        },
        point: {
          red: '#DD2C00',
          green: '#00C853',
          orange: '#FFAB00',
          primary: '#27374D',
          secondary: '#526D82',
          dark: '#212121',
        }
      }
    },
    fontFamily: {
      notosanskr: ['notosanskr'],
    },
  },
  plugins: [],
  darkMode: 'class',
};