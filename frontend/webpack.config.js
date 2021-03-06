const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
enforce: 'pre',
    use: ['source-map-loader'],
        //use: {
          //loader: "babel-loader",
        //},
      },
    ],
  },
  optimization: {
    minimize: true,
  },
const { SourceMapDevToolPlugin } = require("webpack");
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],


[
  new SourceMapDevToolPlugin({
    filename: "[file].map"
  }),
...
],
};
