import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { type RuleSetRule } from "webpack"

import { checkStyleModule } from "./lib/checkStyleModule"
import { type BuildOptions } from "./types/config"

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
    const { isDev } = options

    const typescriptLoader = {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
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
                            : "[hash:base64:8]"
                    }
                }
            },
            "sass-loader"
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
    }

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: "file-loader"
            }
        ]
    }

    const plugins = [
        typescriptLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ]

    return plugins
}
