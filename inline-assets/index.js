var through = require('through2');
var staticModule = require('static-module');
var includeSvg = require('include-svg');

module.exports = function(file, opts) {
  if (/\.json$/.test(file)) return through();

  return staticModule({
    'include-svg': includeSvg
  }, {});
};
