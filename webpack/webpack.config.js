import { resolve } from 'path';
// const { resolve } = require('node:path');
// const path = require('node:path');
module.exports = {
  mode: 'development',
  entry: resolve(__dirname, '../components/index.ts'),
  output: {
    path: resolve(__dirname, './webpack/dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.(ts|tsx)$/, loader: 'ts-loader' }],
  },
};
