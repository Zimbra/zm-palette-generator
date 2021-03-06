const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'zmPaletteGenerator',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production'
};

