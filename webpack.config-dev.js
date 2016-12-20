import webpack from "webpack";

import entryConfig from "./webpack-config/entry.config-dev";
import outputConfig from "./webpack-config/output.config";
import loadersConfig from "./webpack-config/loaders.config";
import pluginsConfig from "./webpack-config/plugins.config-dev";

const webpackConfig = {
	devtool: "sourcemap",
    entry: entryConfig,
    output: outputConfig,
    module: {
        loaders: loadersConfig
    },
    resolve: {
        extensions: ["", ".js", ".entry.js", ".resource.js", ".html", ".scss", ".css", ".vue"]
    },
    plugins: pluginsConfig
};

module.exports = webpackConfig;