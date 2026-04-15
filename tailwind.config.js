/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f2326',
        graphite: '#30363a',
        paper: '#fbfbfa',
        line: '#dedbd4',
        oxblood: '#9b2f38',
        fern: '#315c54',
        brass: '#a8743b'
      },
      fontFamily: {
        sans: ['Inter', 'Aptos', 'Segoe UI', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif']
      },
      boxShadow: {
        lift: '0 22px 60px rgba(31, 35, 38, 0.12)'
      }
    }
  },
  plugins: []
};
