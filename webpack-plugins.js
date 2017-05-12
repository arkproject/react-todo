const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

// exports.htmlPlugin = new HtmlWebpackPlugin({
//   filename: 'index.html',
//   template: 'template.html'
// });

// Not an option from UglifyJsPlugin anymore
exports.loaderOptionsPlugin = new webpack.LoaderOptionsPlugin({
  minimize: true
});

// source-map is default to false now
exports.ugligyPlugin = new webpack.optimize.UglifyJsPlugin({
  output: {
    comments: false
  },
  compress: {
    warnings: false
  }
});

exports.providePlugin = new webpack.ProvidePlugin({
  '$': 'jquery',
  'jQuery': 'jquery'
});
