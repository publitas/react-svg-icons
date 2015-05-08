var through = require('through2');

module.exports = function() {
  return through(write);

  function write(data, _, cb) {
    this.push(data.toString().replace(/ASSET_PATH/, resolveAssetPath()));
    cb();
  }

  function resolveAssetPath() {
    var assetPath;
    var pkg;

    try {
      pkg = require.main.require('./package');

      if (pkg['react-svg-icons']) {
        assetPath = pkg['react-svg-icons'].assetPath;
      }
    } catch(e) {
      assetPath = './icons';
    }

    return JSON.stringify(assetPath);
  }
};
