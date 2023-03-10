import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {
    type WebpackPluginInstance,
    ProgressPlugin,
    HotModuleReplacementPlugin,
    DefinePlugin
} from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { type BuildOptions } from "./types/config";

export const buildPlugin = (options: BuildOptions): WebpackPluginInstance[] => {
    const { paths, isDev, isAnalyzer } = options;

    const plugins = [
        new ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css"
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ];

    if (isAnalyzer) {
        plugins.push(
            new BundleAnalyzerPlugin({
                analyzerMode: "server"
            })
        );
    }

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new HotModuleReplacementPlugin());
    }

    return plugins;
};
