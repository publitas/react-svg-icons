module.exports = function(svgString) {
  return svgString
    // remove xml prolog
    .replace(/<\?xml[\s\S]*?>/gi, '')
    // remove doctype
    .replace(/<!doctype[\s\S]*?>/gi, '')
    // remove outer svg element
    .replace(/<\/?svg[^>]*>/g, '')
    // remove comments
    .replace(/<!--[\s\S]*?-->/g, '')
    // remove hardcoded dimensions
    .replace(/width="\d+(\.\d+)?(px)?"/gi, '')
    .replace(/height="\d+(\.\d+)?(px)?"/gi, '')
    .trim();
};
