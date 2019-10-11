module.exports = {
  plugins: {
    'stylelint': {
      configFile: './webpack/stylelint.config.js'
    },
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    'cssnano': {},
    'postcss-pseudo-class-any-link': {},
    'rucksack-css': {}
  }
};
