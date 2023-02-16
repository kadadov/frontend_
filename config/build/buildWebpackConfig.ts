import { type Configuration } from "webpack";

import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugin } from "./buildPlugin";
import { buildResolve } from "./buildResolve";
import { type BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): Configuration => {
    const { paths, mode, isDev } = options;

    const config = {
        entry: paths.src,
        mode,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true
        },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        module: {
            rules: buildLoaders(options)
        },
        plugins: buildPlugin(options),
        resolve: buildResolve(options)
    };

    return config;
};

export default buildWebpackConfig;
