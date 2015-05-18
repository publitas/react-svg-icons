var test = require('tap').test;
var browserify = require('browserify');
var vm = require('vm');

test('inline assets', function(t) {
  t.plan(2);

  var b = browserify(__dirname + '/files/inlined-assets.js');
  b.transform(__dirname + '/../inline-assets');
  b.bundle(function(err, src) {
    if (err) throw(err);
    var res = {};
    vm.runInNewContext(src, res);

    t.similar(Object.keys(res.icons), ['test-icon']);
    t.type(res.icons['test-icon'], 'function');
  });
});
