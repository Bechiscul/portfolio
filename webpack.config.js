const path = require("path");
const webpack = require("webpack");

const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: path.join(__dirname, "./src/main.tsx"),
    output: {
        path: path.join(__dirname, "./build"),
        filename: "bundle.min.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/, // .ts .tsx
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: ["postcss-preset-env", "tailwindcss", "autoprefixer"]
                            }
                        }   
                    }
                ]
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(jpg|png)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.join(__dirname, "./src/index.html")}),
        new MiniCssExtractPlugin({filename: "[name].css", chunkFilename: "[id].css"})
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    devServer: {
        historyApiFallback: true,
    }
}