import path from "path";

const ROOT_PATH = path.resolve(__dirname, "..");
const DIST_PATH = path.resolve(ROOT_PATH, "dist");

module.exports = {
	path: DIST_PATH,
  	filename: "[name].js",
  	chunkFilename: "[id].chunk.js"
};