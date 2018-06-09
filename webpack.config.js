module.exports =
  process.env.NODE_ENV === 'development'
    ? require('./webpack/webpack.config.dev.js')
    : require('./webpack/webpack.config.production.js');
