/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'softred': '#ec775f',
        'cyan': ' #76b5bc',
        'darkbrown' : '#382314',
        'mediumbrown' : '#93867b',
        'cream' : '#f8e9dd',
        'paleorange': '#fffaf5',
        'barhover': '#f4ad9b'
      }
    },
  },
  plugins: [],
}
