import { type RuleSetRule } from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import { type BuildOptions } from "./types/config"
import { checkStyleModule } from "./lib/checkStyleModule"

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options

    const typescriptLoader = {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    }

    const babelLoader = {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
        },
    }

    const styleLoader = {
        test: /\.scss$/i,
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
            "sass-loader",
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }

    const plugins = [
        babelLoader,
        typescriptLoader,
        styleLoader,
        svgLoader,
        fileLoader,
    ]

    return plugins
}
