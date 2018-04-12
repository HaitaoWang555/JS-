const path = require('path');
webpack = require("webpack"),

module.exports = {
    entry: './src/js/app/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool:'source-map',
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/
            }
        ]
    }
}