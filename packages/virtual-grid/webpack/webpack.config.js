// import { resolve } from 'path';
// const { resolve } = require('node:path');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  // entry: path.resolve(__dirname, './components/index.ts'),
  entry: './components/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
    // library: {
    //   name: 'indexAA',
    //   type: 'umd',
    // },
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../'),
    },
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   loader: 'ts-loader',
      //   exclude: /node_modules/,
      //   options: {
      //     appendTsSuffixTo: [/\.vue$/],
      //   },
      // },
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-typescript'],
            plugins: ['@vue/babel-plugin-jsx'],
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== 'vue';
      },
    },
  },
  plugins: [new VueLoaderPlugin()],
};
