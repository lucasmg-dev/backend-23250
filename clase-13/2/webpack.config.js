const path = require("path");
// const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  entry: "./src/server.ts",
  // plugins: [webpackNodeExternals()],
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"), // "./dist" "C:\User\"
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
