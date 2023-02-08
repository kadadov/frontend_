import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";
import { checkStyleModule } from "./lib/checkStyleModule";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  } as RuleSetRule;

  const styleLoader = {
    test: /\.css$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: checkStyleModule,
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
    ],
  } as RuleSetRule;

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ["@svgr/webpack"],
  } as RuleSetRule;

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  } as RuleSetRule;

  const plugins = [typescriptLoader, styleLoader, svgLoader, fileLoader];

  return plugins;
};
