const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // ENTRY
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  // PLUGINS
  plugins: [new HtmlWebpackPlugin({ title: "Slot Game" })],
  // OTPUT
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // MODULE
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
