import { BuildOptions } from "./types/config";
import { Configuration } from "webpack-dev-server";

export const buildDevServer = (options: BuildOptions): Configuration => {
  const { port } = options;

  const config = {
    port,
    open: true,
    historyApiFallback: true,
    hot: true,
  } as Configuration;

  return config;
};
