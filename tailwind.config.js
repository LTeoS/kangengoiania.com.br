/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

export default {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx,html}'],
  theme: {
    extend: {
      boxShadow: {
        button:
          '0px 1.850000023841858px 3.1500000953674316px 0px rgba(27, 90, 112, 0.02), 0px 8.149999618530273px 6.519999980926514px 0px rgba(27, 90, 112, 0.04), 0px 20px 13px 0px rgba(27, 90, 112, 0.05), 0px 38.52000045776367px 25.479999542236328px 0px rgba(27, 90, 112, 0.06), 0px 64.80999755859375px 46.849998474121094px 0px rgba(27, 90, 112, 0.08), 0px 100px 80px 0px rgba(27, 90, 112, 0.10);',
      },
      backgroundSize: {
        footer: '100% 400px;',
      },
    },
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
      addVariant('child-hover', '&:hover > img')
      addVariant('child', '& > img')
    }),
  ],
}
