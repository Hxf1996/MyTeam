import ExtractTextPlugin from "extract-text-webpack-plugin";

module.exports = [
	{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap-convertValues!autoprefixer?{browsers:['last 2 version', 'Firefox 15']}!sass?sourceMap")
	},
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
    },
	{
        test: /\.(png|jpg)$/,
        loader: "url?limit=8192&name=images/[name].[ext]"
	},
	{
        test: /\.js?$/,
        loader: "babel",
        query: {
            presets: ["es2015"]
        },
        exclude: /node_modules/
	},
    {
        test:/\.vue$/,
        loader:"vue"
    },
	{
        test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
        loader: "file?name=fonts/[name].[ext]"
    },
    {
        test: /\.(mp4|webm)\??.*$/,
        loader: "file?name=videos/[name].[ext]"
    }
];