const paths = require("./paths");
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");
const port = 8080;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    // Configuration spécifique au mode développement, donc npm run serve
    mode: "development",
    output: {
        // L'output est indiqué ici et dans le mode production car l'importation des fichiers dans le html n'était pas bon sinon
        path: paths.build,
        publicPath: "/",
        filename: "js/[name].[contenthash].js",
    },
    devtool: "inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            favicon: "./src/assets/images/favicon.ico",
            template: "./src/assets/html/index.html",
            inject: true,
        }),
    ],
    module: {
        rules: [
            // Styles loader et tous les loader impliqués. On demande les sourceMap
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
    // On indique au module responsable du rechargement automatique qu'on souhaite avoir une ouverture automatique au lancement de la commande, un historique et utiliser le port indiqué
    devServer: {
        open: true,
        historyApiFallback: true,
        port,
    },
});
