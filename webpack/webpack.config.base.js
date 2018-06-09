const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: 'js/[name]-bundle.js',
    path: path.resolve(__dirname, '../public')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].html' }
          },
          { loader: 'extract-loader' },
          { loader: 'html-loader' }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[hash:8].[ext]' }
          }
        ]
      },
      {
        test: /\.(js|json|jsx)$/,
        use: { loader: 'babel-loader' },
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
