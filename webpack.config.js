var webpack = require('webpack');

var entryConfig = require('./webpack-config/entry.config');
var outputConfig = require('./webpack-config/output.config');
var loadersConfig = require('./webpack-config/loaders.config');
var pluginsConfig = require('./webpack-config/plugins.config');

var webpackConfig = {
  devtool: 'eval-source-map',
  entry: entryConfig,
  output: outputConfig,
  module: {
    loaders: loadersConfig
  },
  resolve: {
      extensions: ['', '.entry.js', '.html']
  },
  plugins: pluginsConfig
};

module.exports = webpackConfig;