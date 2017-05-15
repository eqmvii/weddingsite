var path = require('path');

module.exports = {
  entry: './scripts/wedding.js',
  output: {
    filename: 'weddingbundle.js',
    path: path.resolve(__dirname, 'public')
  }
};
