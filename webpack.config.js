// Lección 87
//Esta es la estructura común para la configuración de webpack

const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    output: {
        clean: true //Realiza una limpieza de la carpeta dist al hacer build
    },
    module: {
        rules: [
            {   //Busca todos los html, si se agrega i permite ignorar el case sensitive
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    optimization: {},
    //Existen plugins oficiales (recomendados) y plugins de terceros
    plugins: [
        new HtmlWebPack({
            title: 'Mi WebpackApp',
            //filename: 'index.html', //Por defecto index.html
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',//Permite dar un consecutivo al nombre del css, muy recomendado
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [{
                from: 'src/assets/',
                to: 'assets/'
            }]
        })
    ]
}