module.exports = {
  entry: './public/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'babel-preset-es2015']
        },
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }

};
