// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fileURLToPath } = require('node:url');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { dirname, resolve } = require('node:path');

// const __dirname = dirname(fileURLToPath(import.meta.url));
module.exports = {
  mode: 'development',
  entry: resolve(__dirname, '../components/index.ts'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{ test: /\.(ts|tsx)$/, loader: 'ts-loader' }],
  },
};
