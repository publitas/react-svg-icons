module.exports = function resolveAssetPath() {
  var assetPath;
  var pkg;

  try {
    pkg = require('../../../package'); // TODO: this seems very brittle

    if (pkg['react-svg-icons']) {
      assetPath = pkg['react-svg-icons'].assetPath;
    }
  } catch(e) {
    assetPath = './icons';
  }

  return JSON.stringify(assetPath);
};
