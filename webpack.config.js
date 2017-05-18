const path = require('path');

module.exports = {
  entry: './public/app.jsx',
  output: {
    path: path.resolve(__dirname),
    filename: './public/bundle.js'
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      Greeter: path.resolve(__dirname, 'public/components/Greeter.jsx'),
      GreeterMessage: path.resolve(__dirname, 'public/components/GreeterMessage.jsx'),
      GreeterForm: path.resolve(__dirname, 'public/components/GreeterForm.jsx')
    },
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
