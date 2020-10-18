const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                precss,
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  entry: {
    site: path.join(__dirname, 'mesolex/static/js/index.js'),
    dataSearch: path.join(__dirname, 'mesolex_site/static/mesolex_site/ts/search.tsx'),
  },
  output: {
    path: path.join(__dirname, 'mesolex/static/dist'),
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'initial',
          minChunks: 2,
          minSize: 0,
        },
      },
    },
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.ts', '.tsx'],
    alias: {
      lexicon: path.resolve(__dirname, 'lexicon/static/jsx/search/'),
      'query-builder': path.resolve(__dirname, 'query_builder/static/ts/'),
      'plyr-src': path.resolve(__dirname, 'node_modules/plyr/src/'),
    },
  },
};
