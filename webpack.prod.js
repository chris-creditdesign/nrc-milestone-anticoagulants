const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const extractSass = new ExtractTextPlugin({
	filename: "./css/[chunkhash:8].style.css"
});

module.exports = merge(common, {
	devtool: "source-map",
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSass.extract({
				use: [{
					loader: "css-loader", options: { importLoaders: 1}
				}, {
					loader: "postcss-loader", options: { sourceMap: true }
				},{
					loader: "sass-loader", 
					options: {
						outputStyle: "compressed"
					}
				}],
				// Not being used, but just in case
				fallback: "style-loader"
			})
		}, {
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ["es2015"],
					plugins: ["syntax-dynamic-import"]
				}
			}
		}]
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		extractSass
	]
});