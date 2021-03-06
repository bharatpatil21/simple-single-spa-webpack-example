const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

module.exports = {
  entry: {
    "root-application": "src/root-application/root-application.js",
    "common-dependencies": [
      // We want just one version of angular, so we put it into the common dependencies
      "core-js/client/shim.min.js",
      "@angular/common",
      "@angular/compiler",
      "@angular/core",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      "reflect-metadata",
      /* Just one version of react, too. react-router is fine to have multiple versions of,
       * though, so no need to put it in common dependencies
       */
      "react",
      "react-dom",
    ],
  },
  output: {
    publicPath: "/dist/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js?$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"],
        },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imagesss/',
              publicPath: 'imagesss/'
            }
          }
        ]
      }
    ],
  },
  node: {
    fs: "empty",
  },
  resolve: {
    modules: [__dirname, "node_modules"],
  },
  optimization: {
    splitChunks: {
      name: "common-dependencies.js",
    },
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.resolve(__dirname, "../src")
    ),
  ],
  devtool: "source-map",
  externals: [],
  devServer: {
    historyApiFallback: true,
  },
};
