const {join} = require('path')

module.exports = {
  entry: './js/BrowserEntry.js',
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'public'),
    publicPath: '/public/'
  },
  stats: {
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'eslint-loader'
        }
      },
      {
        test: /\.json$/,
        use: {
          loader: 'json-loader'
        }
      }
    ]
  }
}
