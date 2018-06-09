const path = require('path');
const webpack = require('webpack');

const config = {
  entry: path.resolve(__dirname, '../src/app/index.js'),
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/public/'
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: 'file-loader?name=images/[name].[hash].[ext]'
      }
    ]
  }
};

module.exports = config;
