import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export default (env: any) => {
  const mode = env.mode || "development";
  const PORT = env.port || 3000;
  const isDev = mode === "development";

  const config: Configuration = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    mode,
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev
      ? ({
          port: PORT,
          open: true,
          historyApiFallback: true,
          hot: true,
        } as DevServerConfiguration)
      : undefined,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: [
            isDev ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: {
                  auto: (path: string) => !!path.includes(".module."),
                  localIdentName: isDev
                    ? "[path][name]__[local]"
                    : "[hash:base64:8]",
                },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };

  return config;
};
