const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pathToPhaser = path.join(__dirname, "/node_modules/phaser");
const phaser = path.join(pathToPhaser, "dist/phaser.js");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    app: './src/main.ts',
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader", options: { allowTsInNodeModules: false }, exclude: "/node_modules/" },
      { test: /phaser\.js$/, loader: "expose-loader?Phaser" },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      phaser: phaser,
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Tiled-Phaser-tester",
      chunks: ['app']
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets'),
          to: 'assets'
        },
      ]
    }
    ),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    host: '0.0.0.0',
    port: 8083,
    watchOptions: {
      poll: 1000
    },
    open: false
  },
};