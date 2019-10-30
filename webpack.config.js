const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.join(__dirname, './src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, './dist')
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        overlay: {
            errors: true
        },
        inline: true,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', 'jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: true
        })
    ],
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

}