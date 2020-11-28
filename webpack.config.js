module.exports = {
  optimization: {
    minimize: true
  },
  entry:  './js/',
  output: {
    path:     `${__dirname}/js`,
    filename: 'nullchan.js',
  },

  module: {
    rules: [
      {
        test:   /\.jsx/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  }
}
