const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [nodeExternals()], // exclude external modules
  module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loaders: ["babel-loader"]
			}
		]
  },
	plugins: [
    new UglifyJsPlugin()
  ]
};