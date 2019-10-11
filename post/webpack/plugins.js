const path = require('path');
const _Mini = require('mini-css-extract-plugin');
const _stylelintplugin = require('stylelint-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const Mini = new _Mini({
  filename: '[name].bundle.css',
  chunkFilename: '[id].css'
});

const StyleLintPlugin = new _stylelintplugin({
  configFile: path.resolve(__dirname, 'stylelint.config.js'),
  context: path.resolve(__dirname, '../src/css'),
  files: '**/*.sass',
  failOnError: false,
  quiet: false
});

const Vis = new Visualizer({
  filename: '../stats/stats.html'
});


module.exports = {
  MiniCssExtractPlugin: Mini,
  StyleLintPlugin: StyleLintPlugin,
  VisualizerPlugin: Vis
};
