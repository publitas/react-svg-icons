var through = require('through2');
var staticModule = require('static-module');
var toReact = require('svg-to-react');
var tosource = require('tosource');

module.exports = function(file, opts) {
  if (/\.json$/.test(file)) return through();

  return staticModule({
    'svg-to-react': {
      convertDir: convertDirInlinded
    }
  }, {});
};

function convertDirInlinded(dirPath, callback) {
  var stream = through();
  stream.push('(' + callback + ')(null,');

  toReact.convertDir(dirPath, function(e, res) {
    if (e) throw e;

    stream.push(tosource(res));
    stream.push(')');
    stream.push(null);
  });

  return stream;
}
