/* eslint-disable */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {

    index: {

      import: './src/index.js',

      dependOn: 'shared',

    },

    print: {

      import: './src/print.js',

      dependOn: 'shared',

    },

    shared: './src/style.css',
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
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {

    runtimeChunk: 'single',

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
