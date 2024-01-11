/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'tenor': ['Tenor Sans', 'sans-serif'],
      'prata': ['Prata', 'sans-serif'],
    },
    extend: {
      colors: {
        themeBlue: '#134074',
        secondary: '#13315c',
        thirdBlue: '#0b2545',
        textColor: '#EEF4ED',
        lightBlue: '#8DA9C4',
      },
      padding: {
        'mobile': '0.5rem'
      },
      fontSize: {
        'mobile-heading': '1.25rem',
        'mobile-subheading': '1rem',
        'mobile-text': '0.8rem',
      }
    },
  },
  plugins: [],
}