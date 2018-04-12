const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

	module.exports = {
		entry: './src/js/app/main.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist')
		},
		plugins: [			
			new CleanWebpackPlugin(['dist']),
		  new HtmlWebpackPlugin({
				title: 'module_example',
				hash: true
			}),
			new webpack.ProvidePlugin({
				$: 'jquery'
			})
		],
		resolve:{
			alias:{
				carousel: path.resolve(__dirname,'src/js/mod/carousel.js'),
				goTop: path.resolve(__dirname,'src/js/mod/goTop.js'),
				waterFall: path.resolve(__dirname,'src/js/mod/waterFall.js'),
				appScss: path.resolve(__dirname,'src/scss/app.scss')
			}
		},
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