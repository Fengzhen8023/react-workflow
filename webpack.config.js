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
    devtool: "source-map",
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
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                loader: "file-loader?name=assets/[name].[ext]"
            }
        ]
    }

}