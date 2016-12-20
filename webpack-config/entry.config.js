import path from "path";

const ROOT_PATH = path.resolve(__dirname, "..");
const SRC_PATH = path.resolve(ROOT_PATH, "src");

const entryArr = require(ROOT_PATH+"/entry");

const entryConfig = {};

entryConfig['common'] = [
	'normalize.css/normalize',
	'font-awesome/css/font-awesome.min'
];

for(let entry in entryArr){
  	entryConfig[entryArr[entry]] = path.resolve(SRC_PATH, entry);
}

module.exports = entryConfig;