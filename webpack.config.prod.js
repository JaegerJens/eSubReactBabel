const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

const isNodeModule =
    (context) => context && context.indexOf("node_modules") !== -1;

module.exports = {
    entry: {
        main: "./src/index.jsx",
        react: "react"
    },
    output: {
        filename: "[chunkhash].[name].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "react",
            minChunks: (module) => isNodeModule(module.context)
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {warnings: false}
        })
    ],
    resolve: {extensions: [".js", ".jsx"]},
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {presets: ["react", "es2015"]}
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    }
};
