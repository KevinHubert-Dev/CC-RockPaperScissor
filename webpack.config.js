const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    "index": "./build/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "js/[name].js"
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/css/', to: 'css' },
      { from: 'src/index.html', to: 'index.html' }
    ]),
  ]
}