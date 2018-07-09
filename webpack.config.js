const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  mode: "production",
  entry: {
    api: ["./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
},
  externals: [nodeExternals()],
};