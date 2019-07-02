const {
  CheckerPlugin
} = require('awesome-typescript-loader');
const {
  join
} = require('path');
const {
  optimize
} = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    webPanelScriptWrap: join(__dirname, 'src/webPanelScriptWrap.js')
  },
  output: {
    path: join(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.ts?$/,
      use: 'awesome-typescript-loader?{configFileName: "chrome/tsconfig.json"}'
    }]
  },
  plugins: [
    new CheckerPlugin(),
    new optimize.AggressiveMergingPlugin(),
    new optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.js']
  }
};