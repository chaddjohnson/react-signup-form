// Configure webpack manually to enable non-hacky control over its configuration
// (e.g., no react-app-rewired, customize-cra, or craco). Ultimately, I would
// prefer to discuss such a decision with the team before proceeding.

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          'eslint-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BASE_PATH': JSON.stringify(
        process.env.NODE_ENV === 'production' ? '/signup-assessment' : ''
      )
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './public/404.html',
      filename: '404.html'
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CompressionWebpackPlugin()
  ],
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat'
    }
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    compress: true,
    disableHostCheck: true
  }
};
