const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].bundle.js'
  },

  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
    ]
  },

  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.VisualizerPlugin,
  ],

};
