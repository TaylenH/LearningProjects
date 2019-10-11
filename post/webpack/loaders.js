const MiniCssExtractorPlugin = require('mini-css-extract-plugin');

const JSLoader = {
  test: /\.[tj]sx?$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
  }
};

const ESLintLoader = {
  test: /\.[tj]sx?$/,
  enforce: 'pre',
  exclude: /node_modules/,
  use: {
    loader: 'eslint-loader',
    options: {
      configFile: __dirname + '/.eslintrc'
    }
  }
}

const CSSLoader = {
  test: /\.s?[ac]ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractorPlugin.loader,
      options: {
        pubicPath: __dirname + '../build/css/'
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        modules: {
          localIdentName: '[path][name]__[local]--[hash:base64:5]'
        }
      }
    },

    {
      loader: 'postcss-loader',
      options: {
        config: {
          path: __dirname + '/postcss.config.js'
        }
      }
    },
    {
      loader: 'sass-loader'
    }
  ]
};

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSLoader: CSSLoader
};
