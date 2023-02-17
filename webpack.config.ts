import path from "path";

import { type Configuration } from "webpack";

import buildWebpackConfig from "./config/build/buildWebpackConfig";
import { type BuildEnv } from "./config/build/types/config";

export default (env: BuildEnv): Configuration => {
    const mode = env.mode || "development";
    const port = env.port || 3000;
    const isDev = mode === "development";
    const isAnalyzer = env.analyzer;

    const paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src")
    };

    const options = {
        mode,
        isDev,
        port,
        paths,
        isAnalyzer
    };

    const config = buildWebpackConfig(options);

    return config;
};
