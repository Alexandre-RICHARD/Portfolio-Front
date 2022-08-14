const paths = require("./paths");
const common = require("./webpack.common.js");
const {
    merge
} = require("webpack-merge");
const port = 8080;

module.exports = merge(common, {
    mode: "development",
    output: {
        path: paths.build,
        publicPath: "/",
        filename: "js/[name].[contenthash].js",
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            // Styles loader
            {
                test: /\.(s?css)$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },

    devServer: {
        open: true,
        historyApiFallback: true,
        port,
    },
});