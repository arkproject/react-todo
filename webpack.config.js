
const loaders = require('./webpack-loaders');
const plugins = require('./webpack-plugins');
const PATHS = require('./webpack-paths');
const path = require('path');


const config = {
  entry: ['script-loader!jquery/dist/jquery.min.js',
          'script-loader!foundation-sites/dist/js/foundation.min.js',
          './app/app.jsx'
        ],
  output: {
    path: PATHS.public,
    filename: 'bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    // 'rules' substitutes 'loaders'
    rules: [
      loaders.babel,
      loaders.sassloader
    ]
  },
  plugins: [
    plugins.providePlugin,
    plugins.definePlugin,
    plugins.loaderOptionsPlugin,
    plugins.ugligyPlugin
  ],
  resolve: {
    // no need for the empty string extension anymore
    modules: [__dirname, 'node_modules', path.resolve(__dirname, 'app/components')],
    alias: {
      // TodoApp: 'app/compoents/TodoApp',
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['*', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map'
};


module.exports = config;
