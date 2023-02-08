import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugin } from "./buildPlugin";
import { buildResolve } from "./buildResolve";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { paths, mode, isDev } = options;

  const config = {
    entry: paths.src,
    mode,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugin(options),
    resolve: buildResolve(options),
  } as Configuration;

  return config;
};

export default buildWebpackConfig;
