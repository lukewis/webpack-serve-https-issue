const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/index.js',
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack-Serve-Test",
            hash: true,
        }),
    ],
    serve: {
        host: "webpackserve.local",
        https: {
            key: fs.readFileSync("webpackserve.local.key"),
            cert: fs.readFileSync("webpackserve.local.cert")
        }
    }
};
