import { type Configuration } from "webpack-dev-server";

import { type BuildOptions } from "./types/config";

export const buildDevServer = (options: BuildOptions): Configuration => {
    const { port } = options;

    const config = {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };

    return config;
};
