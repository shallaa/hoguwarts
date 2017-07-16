const path = require('path');
const webpack = require('webpack');
const copy = require('copy-webpack-plugin');
const html = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');
const TextExtra = require('extract-text-webpack-plugin');

const cssExtra = new TextExtra('css/main.css');
const app = 'app/main.js';

module.exports = {
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, app),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  plugins: [
    new clean(['dist'], { root: __dirname, verbose: true }),
    new html({ inject: true, template: './app/index.html' }),
    cssExtra
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: 'handlebars-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: cssExtra.extract(['css-loader', 'sass-loader'])
      }
    ]
  }
};