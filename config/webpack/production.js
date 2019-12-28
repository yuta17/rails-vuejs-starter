const Merge = require('webpack-merge');
const CommonConfig = require('./common.js');
const path = require('path');

module.exports = Merge(CommonConfig, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../../public/assets'),
    filename: '[name]-[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            publicPath: 'https://static.camp-fire.jp/assets/images',
            name: '[name]-[hash].[ext]'
          }
        }]
      }
    ]
  }
});
