var through = require('through2');
var resolveAssetPath = require('../lib/resolve-asset-path');
var staticModule = require('static-module');

module.exports = function(file) {
  if (/\.json$/.test(file)) return through();

  return staticModule({
    './lib/resolve-asset-path': resolveAssetPath
  }, {});
};
