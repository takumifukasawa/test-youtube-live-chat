// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "script.js",
    path: path.join(__dirname, "docs"),
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
      }, ],
    }, ],
  },
  node: {
    fs: "empty"
  },
};