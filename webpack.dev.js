const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

const extractSass = new ExtractTextPlugin({
	filename: "./css/style.css"
});

module.exports = merge(common, {
	devtool: "inline-source-map",
	devServer: {
		contentBase: "./dist/"
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: extractSass.extract({
				use: [{
					loader: "css-loader", options: { importLoaders: 1}
				}, {
					loader: "sass-loader", 
					options: {
						outputStyle:"expanded"
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
		extractSass
	]
});