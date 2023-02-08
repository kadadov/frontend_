import { RuleSetRule } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { BuildOptions } from "./types/config";
import { checkStyleModule } from "./lib/checkStyleModule";

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options;

  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.css$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: checkStyleModule,
              localIdentName: isDev
                ? "[path][name]__[local]"
                : "[hash:base64:8]",
            },
          },
        },
      ],
    },
  ];
};
