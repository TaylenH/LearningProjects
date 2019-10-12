const MiniCssExtractorPlugin = require('mini-css-extract-plugin');

const JSLoader = {
  test: /\.[tj]sx?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'react-hot-loader/webpack'
  },
  {
    loader: 'babel-loader',
  }]
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

const CSSProdLoader = {
  test: /\.s?[ac]ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: MiniCssExtractorPlugin.loader,
      options: {
        pubicPath: __dirname + '../build'
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

const CSSDevLoader = {
  test: /\.s?[ac]ss$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'style-loader'
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

const AssetLoader = {
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: 'file-loader'
    },
    {
      loader: 'url-loader',
      options: {
        limit: 8192
      }
    }
  ]
}

module.exports = {
  JSLoader: JSLoader,
  ESLintLoader: ESLintLoader,
  CSSProdLoader: CSSProdLoader,
  CSSDevLoader: CSSDevLoader,
  AssetLoader: AssetLoader
};
