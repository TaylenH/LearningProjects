const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var data = require('./data');

const config = {
  //entry
  entry: path.resolve(__dirname, './src/'),

  //output
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
    globalObject: "this",
  },

  //plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new StaticSiteGeneratorPlugin('main', data.routes, data),
  ],

  //loaders
  module: {
    rules: [
      //javascript/jsx files
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      //css files
      {
        test: /\.s?[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              },
            },
          },
        ],
      },
    ],
  },


  //reload on file chages
  watch: false,

  //dev tools (map erros to source files)
  devtool: 'source-map',

  mode: 'development',
};

//exports
module.exports = config;
