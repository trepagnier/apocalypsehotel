const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: "cheap-eval-source-map",
  // watch: true,
  entry: {
    app: ["babel-polyfill", "./public/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/build/",
    filename: "project.bundle.js"
  },
  devServer: {
    compress: true,
    port: 8020,
    contentBase: "public",
    historyApiFallback: true,
    proxy: [
      {
        context: [
          "/data",
          "/login",
          "/save",
          "/session",
          "/scratch",
          "/transactions"
        ],
        target: "http://localhost:8080",
        secure: false
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015", "stage-0"]
        }
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      jquery: path.resolve(__dirname, "node_modules/jquery/dist/jquery.min"),
      app: path.resolve(__dirname, "public")
    }
  }
};
