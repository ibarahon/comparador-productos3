/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
      },
      colors: {
        'amazon': {
          light: '#febd69',
          DEFAULT: '#ff9900',
          dark: '#e88b00',
        },
        'aliexpress': {
          light: '#ff6a6a',
          DEFAULT: '#e43226',
          dark: '#c41e12',
        },
        'temu': {
          light: '#c490e4',
          DEFAULT: '#8b3dff',
          dark: '#6a1cc3',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
