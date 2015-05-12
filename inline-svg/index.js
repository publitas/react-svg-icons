// shim. will be overriden as static module in transform
// The reason for this shim is that static-module still leaves the inlined module
// in the code base, resulting in a lot of code shipped to the frontend that is
// not necessary (like the entire SVGO library)
module.exports = function() {
  return {};
};
