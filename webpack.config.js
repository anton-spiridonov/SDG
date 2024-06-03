const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = [
  {
    entry: "./src/index.tsx",
    output: {
      path: path.join(__dirname, "build"),
      filename: production ? "[name].[contenthash].js" : "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.ts$|tsx/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /node_modules/,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: !production,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: !production,
              },
            },
          ],
        },
        {
          test: /\.(jpe?g|gif|png|svg)$/i,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10000,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".*", ".js", ".ts", ".tsx", ".jsx", ".scss"],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "Webpack & React",
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: production ? "[name].[contenthash].css" : "[name].css",
      }),
    ],
    devServer: {
      port: 3001,
      hot: true,
      historyApiFallback: true,
    },
    mode: production ? "production" : "development",
    target: "web",
    node: {
      __dirname: false,
    },
  },
];
