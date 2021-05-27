const webpack = require("webpack");
const dotenv = require("dotenv");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");

const env =
  dotenv.config({
    path: path.join(__dirname, "/../.env"),
  }).parsed || process.env;

module.exports = {
  entry: "./src/server.ts",
  output: {
    filename: "output.js",
    path: path.join(__dirname, "/dist"),
  },
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new NodemonPlugin(),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
  ],
  resolve: {
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
      net: false,
    },
  },
};
