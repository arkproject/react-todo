
const path = require('path');

exports.babel = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components)/,

  use: {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
      }
};

exports.sassloader = {
        test: /\.scss$/,
        // includePaths: path.resolve(__dirname, './node_modules/foundation-sites/scss'),

        use: {
          loader: 'sass-loader',
          options: {
                    includePaths: [
                      path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
        }
};
