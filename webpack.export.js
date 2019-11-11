const path = require('path');
const webpack = require('webpack');
const entry = require('./exportEntry.json');

console.log(entry);

module.exports = {
    entry: entry,
    output: {
        libraryTarget: 'umd',
        filename: "[name].js",
        path: __dirname + "/lib/components"
    },

    devtool: "source-map",
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(j|t)sx?$/,
                include: path.join(__dirname, './src'),
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};
