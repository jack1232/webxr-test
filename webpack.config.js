const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const bundleOutputDir = "./dist";

module.exports = {
    entry: {
        main: "./src/ts/main"  
    },
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, bundleOutputDir),
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.ts', 'tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: ['/node_modules/']
            },            
            { test: /\.tsx?$/, loader: "ts-loader" },        
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.html$/,
                include: [path.resolve(__dirname, 'src')],
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'head',
          filename: 'index.html'
        })
      ]
};

