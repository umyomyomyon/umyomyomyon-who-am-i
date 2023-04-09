/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: '#1E1E1E',
        const: '#679AD1',
        variable: '#6FBFF9',
        type: '#71C6B1',
        other: '#D4D4D4',
        brace: '#F9D849',
        string: '#C5947C',
        comment: '#74985D',
        brackets: '#CC76D1',
        property: '#AADAFA',
        number: '#BACDAB',
      },
      fontSize: {
        dynamic: 'clamp(1.3rem, 2vw, 2rem)',
      },
    },
  },
  plugins: [],
};
