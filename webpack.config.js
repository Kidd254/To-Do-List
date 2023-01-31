const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
devtool: 'inline-source-map',

  devServer: {

    static: './dist',

  },
  plugins: [

    new HtmlWebpackPlugin({

      template: './src/index.html',

    }),

  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {

    runtimeChunk: 'multiple',

  },
  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },
};
