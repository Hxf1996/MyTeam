var path = require('path');

var ROOT_PATH = path.resolve(__dirname, '..');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

var entryArr = require(ROOT_PATH+'/entry');

var entryConfig = {};

for( entry in entryArr){
  entryConfig[entryArr[entry]] = path.resolve(SRC_PATH, entry);
}

module.exports = entryConfig;