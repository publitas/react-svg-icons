module.exports = function(svgString) {
  return svgString
    // remove outer svg element
    .replace(/<\/?svg[^>]*>/g, '')
    // remove hardcoded dimensions
    .replace(/ width="\d+(\.\d+)?(px)?"/gi, '')
    .replace(/ height="\d+(\.\d+)?(px)?"/gi, '');
};
