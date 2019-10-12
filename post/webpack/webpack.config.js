const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/[name].bundle.js'
  },

  module: {
    rules: [
      devMode ? loaders.CSSDevLoader : loaders.CSSProdLoader,
      loaders.JSLoader,
      loaders.ESLintLoader,
    ]
  },

  plugins: [
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.VisualizerPlugin,
  ],

  devServer: {
    port: 8080,
    hot: true,
    contentBase: 'build',
    inline: true,
    open: true
  }

};
