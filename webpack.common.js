var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|svg|gif)$/i,
        dependency: { not: ['url'] },
        use: {
          loader: "file-loader",
          options: {
            publicPath: "assets",
            name: "[name].[hash].[ext]",
            outputPath: "assets",
          },
        },
      },
      // {
      //   test: /\.(png|jpg)$/,
      //   dependency: { not: ['url'] },
      //   loader: "url-loader",
      // },
    ],
  },
};
