import path from "path";
import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

import entryArr from "../entry";

const ROOT_PATH = path.resolve(__dirname, "..");
const SRC_PATH = path.resolve(ROOT_PATH, "src");

const pluginsConfig = [
    new webpack.ProvidePlugin({
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        sourceMap: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: ["common"],
        minChunks: 2
    }),
    new webpack.ProvidePlugin({
        Vue: "vue",
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    }),
    new ExtractTextPlugin("[name].css")
];

for(let entry in entryArr){
    pluginsConfig.push(new HtmlWebpackPlugin({
        filename: entry+".html",
        template: SRC_PATH+"/html/"+entry+".html",
        chunks: [entryArr[entry], "common"],
        inject: true,
        hash: true,
        minify: {
            removeComments:true,
            collapseWhitespace:true
        }
    }));
}

module.exports = pluginsConfig;