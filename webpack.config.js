var path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
  filename: "wedding.css",
  disable: process.env.NODE_ENV === "development"
});


module.exports = {
  entry: './scripts/wedding.js',
  output: {
    filename: 'weddingbundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [extractSass],
  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 8080,
    watchContentBase: true
  }
};
