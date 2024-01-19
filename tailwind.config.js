/** @type {import('tailwindcss').Config} */
import DefaultColors from 'tailwindcss/colors'

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      ...DefaultColors,
      'swift-purple': {
        '50': '#fbf4ff',
        '100': '#f6e5ff',
        '200': '#efd0ff',
        '300': '#e2acff',
        '400': '#d076ff',
        '500': '#be43ff',
        '600': '#af1eff',
        '700': '#980fe1',
        '800': '#7b11b0',
        '900': '#691093',
        '950': '#49006f',
      },
      'dark-blue': {
        '50': '#f2f2ff',
        '100': '#e7e7ff',
        '200': '#d2d3ff',
        '300': '#afadff',
        '400': '#897fff',
        '500': '#624bff',
        '600': '#4e26ff',
        '700': '#4014ed',
        '800': '#3410c7',
        '900': '#3111b0',
        '950': '#17076e',
      },
      'lochinvar': {
        '50': '#f1fcf9',
        '100': '#d0f7ef',
        '200': '#a0efe1',
        '300': '#69dfce',
        '400': '#3ac7b6',
        '500': '#21ab9d',
        '600': '#17877e',
        '700': '#176e68',
        '800': '#175855',
        '900': '#184946',
        '950': '#072c2b',
      },
    }
  },
  plugins: [],
}
