export type BuildMode = "development" | "production";

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    analyzer: boolean;
}

export interface BuildOptions {
    mode: BuildMode;
    isDev: boolean;
    port: number;
    paths: BuildPaths;
    isAnalyzer: boolean;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}
