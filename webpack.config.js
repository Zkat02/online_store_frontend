// webpack.config.js
const path = require("path");
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry:
    // Точка входа приложения, т.е. то, какие файлы вебпак будет компилировать
    {
      main: path.resolve(__dirname, "./src/index.js"),
    },
  output:
    // Точка выхода — это директория, в которую помещаются скомпилированные вебпаком файлы.
    {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].bundle.js",
    },
  mode: "development", // два файла настроек: один с mode: production и другой с mode: development
  devServer: {
    historyApiFallback: true,
    
    static: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,

    
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html", // название выходного файла
    }),
    new CleanWebpackPlugin(),
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      // 'process.env.API_KEY': JSON.stringify('your_api_key'),
      // PRODUCTION: JSON.stringify(true),
      // VERSION: JSON.stringify('5fa3b9'),
      // BROWSER_SUPPORTS_HTML5: true,
      // TWO: '1+1',
      // 'typeof window': JSON.stringify('object'),
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
    })
  ],
  module: {
    rules: [
      // JavaScript
      // если TypeScript-проект, то вместо babel-loader следует использовать typescript-loader
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      // изображения (встроенный модуль для обработки)
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      // шрифты и SVG (встроенный модуль для обработки)
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: "asset/inline",
      },
      // CSS, PostCSS, Sass
      {
        test: /\.(scss|css)$/,
        use: [
          "style-loader", // Для продакшна - MiniCssExtractPlugin вместо style-loader, который экспортирует минифицированный CSS.
          "css-loader",
          // "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },

    ],
  },
};
