module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-calc': {},
    tailwindcss: {},
    'postcss-nested-ancestors': {},
    'postcss-nested': {},
    'postcss-inline-svg': {
      removeFill: true,
      removeStroke: true,
      paths: ['./icons'],
    },
    autoprefixer: { grid: false },
  },
  map: false,
};