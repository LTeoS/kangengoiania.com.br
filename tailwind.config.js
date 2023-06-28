/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities, addVariant }) {
      addUtilities({
        '.thumb-normal': {
          filter:
            'invert(30%) sepia(14%) saturate(2073%) hue-rotate(150deg) brightness(95%) contrast(96%)',
        },
        '.thumb-hover': {
          filter:
            'invert(100%) sepia(0%) saturate(0%) hue-rotate(98deg) brightness(109%) contrast(104%)',
        },
        '.glass-background': {
          background: 'rgba(255, 255, 255, 0.40)',
          backdropFilter: 'blur(15px)',
        },
        '.menu-border': {
          borderColor: 'linear-gradient(180deg, #1B5A70 10%, white 100%)',
          borderLeftWidth: '1px',
        },
      })
      addVariant('child-hover', '&:hover > img', '&:active > img')
    }),
  ],
}
