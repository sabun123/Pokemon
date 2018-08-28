const path = require("path");

const htmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new htmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
})

module.exports = {
    entry:[
        './src/index.js'
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.png$/,
                use: ["url-loader"]
            },
            {
                test: /\.jpg$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader']
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [ 'url-loader']
            }
        ]
    },
    plugins: [htmlPlugin]
}