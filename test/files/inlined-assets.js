var toReact = require('svg-to-react');

toReact.convertDir('test/files/icons', function(err, icons) {
  if (err) throw err;

  this.icons = icons;
});

