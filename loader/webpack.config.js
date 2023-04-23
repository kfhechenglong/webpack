const path = require('path')
module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'replace-loader',
            options: {
              text: 'webpack-5'
            }
          }
        ]
      }
    ]
  },
  resolveLoader:{
    modules: ['./../node_modules', './loader']
  }
}