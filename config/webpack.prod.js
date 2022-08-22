const paths = require("./paths");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    // Configuration spécifique au mode développement, donc npm run build
    mode: "production",
    output: {
        // L'output est indiqué ici et dans le mode développement car l'importation des fichiers dans le html n'était pas bon sinon
        path: paths.build,
        publicPath: "../",
        filename: "js/[name].[contenthash].js",
    },
    devtool: false,
    plugins: [
        new HtmlWebpackPlugin({
            filename: "/html/index.html",
            favicon: "./src/assets/favicon.ico",
            template: "./src/assets/index.html",
            inject: true,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],

    module: {
        rules: [
            {
                // Styles loader et tous les loader impliqués. On demande les sourceMap
                test: /\.(s?css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 3,
                        },
                    },
                    "postcss-loader",
                    "resolve-url-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    // Des plugins visant à améliorer la vitesse de compilation en plus d'en améliorer l'optimisation et la taille
    optimization: {
        minimizer: [
            new TerserPlugin({
                minify: TerserPlugin.esbuildMinify,
                terserOptions: {},
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    performance: {
        hints: "warning",
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
