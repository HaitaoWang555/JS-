const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

	module.exports = {
		entry: './src/js/app/main.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		devtool: 'source-map',
		plugins: [			
		  new HtmlWebpackPlugin({
			  title: 'module_example'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery'
			})
		],
		module: {
			rules: [
				{
					test: /\.js[x]?$/,
					exclude: /node_modules/
				},
				{
					test: /\.scss$/,
					use: [{
						loader: "style-loader"
					}, {
						loader: "css-loader"
					}, {
						loader: "sass-loader",
						options: {
							includePaths: ["absolute/path/a", "absolute/path/b"]
						}
					}]
				}
			]
		}
	}