import path from "path"
import { type BuildEnv } from "./config/build/types/config"
import buildWebpackConfig from "./config/build/buildWebpackConfig"

export default (env: BuildEnv) => {
    const mode = env.mode || "development"
    const port = env.port || 3000
    const isDev = mode === "development"

    const paths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    }

    const options = {
        mode,
        isDev,
        port,
        paths,
    }

    const config = buildWebpackConfig(options)

    return config
}
