const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const prodConfig = merge(baseConfig, { mode: 'production' });

module.exports = prodConfig;
