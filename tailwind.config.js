/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:  '#F4EFE6',
        paper:  '#FAF7F1',
        ink:    '#13202A',
        ink2:   '#3A4953',
        mute:   '#7A8690',
        teal:   '#1F4F58',
        tealup: '#2A6E78',
        wash:   '#E6EBE9',
        hair:   '#D9D1C2',
        cyan:   '#2DD4D4',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
        sans:  ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
