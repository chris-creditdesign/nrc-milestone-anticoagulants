const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
	entry: ["babel-polyfill", "./src/js/index.js"],
	output: {
		filename: "./js/[name].[chunkhash:8].bundle.js",
		chunkFilename: './js/[name].[chunkhash:8].bundle.js',
		path: path.resolve(__dirname, "./dist")
	},
	module: {
		rules: [
			{
				test: /\.modernizrrc.js$/,
				use: [ 'modernizr-loader' ]
			},
			{
				test: /\.modernizrrc(\.json)?$/,
				use: [ 'modernizr-loader', 'json-loader' ]
			}
		]
	},
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, ".modernizrrc")
		}
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/html/index.html"
		}),
		new CopyWebpackPlugin([
			{
				from: "./src/img/",
				to: "./img/"
			},
			{
				from: "./src/audio/",
				to: "./audio/"
			}
		]),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	]
};

module.exports = config;