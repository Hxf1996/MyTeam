var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');

var entryArr = require('../entry');

var ROOT_PATH = path.resolve(__dirname, '..');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var pluginsConfig = [
  new webpack.ProvidePlugin({
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    sourceMap: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: ['common'],
    minChunks: 2
  }),
  new webpack.ProvidePlugin({
      Vue: 'vue'
  }),
  new ExtractTextPlugin("[name].css")
];

for( entry in entryArr){
  pluginsConfig.push(new HtmlWebpackPlugin({
    filename: entry+'.html',
    template: SRC_PATH+'/html/'+entry+'.html',
    chunks: [entryArr[entry], 'common'],
    inject: true,
    hash: true,
    minify: {
      removeComments:true,
      collapseWhitespace:true
    }
  }));
}

module.exports = pluginsConfig;