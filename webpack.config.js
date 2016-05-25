
var
	path = require('path'),
	webpack = require('webpack'),
	UnminifiedWebpackPlugin = require('unminified-webpack-plugin')
;

module.exports = {
	entry: path.resolve(__dirname, 'lib', 'browser.js'),
	output: {
		path: __dirname,
		filename: 'jassl.min.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new UnminifiedWebpackPlugin()
	],
	resolve: {
		modules: ['node_modules']
	}
};