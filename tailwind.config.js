/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-light-cyan': 'hsl(193, 38%, 86%)',
        'primary-neon-green': 'hsl(150, 100%, 66%)',
        'neutral-grayish-blue': 'hsl(217, 19%, 38%)',
        'neutral-dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'neutral-dark-blue': 'hsl(218, 23%, 16%)',
        // add as many colors as you want
      },
    },
  },
  plugins: [],
};
