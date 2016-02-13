module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.css/, loader: 'style!css' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]
      }
    ]
  }
};
