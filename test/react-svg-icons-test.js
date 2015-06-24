var test = require('tap').test;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var renderer = TestUtils.createRenderer();
var proxyquire = require('proxyquire');

var Icon = proxyquire('../index', {
  'svg-to-react': require('./mocks/svg-to-react')
});

function render (component) {
  renderer.render(component);
  return renderer.getRenderOutput();
}

test('rendering an existing icon', function(t) {
  var icon = render(
    React.createElement(Icon, { name: 'foo' })
  );
  var firstChild = icon.props.children; // this is odd

  t.equal(icon.type, 'svg');
  t.equal(firstChild.type, 'circle');

  test('default preserveAspectRatio property', function(tt) {
    tt.equal(icon.props.preserveAspectRatio, 'xMidYMid meet');
    tt.end();
  });

  test('passing props', function(tt) {
    var anotherIcon = render(
      React.createElement(Icon, { name: 'foo',
        width: 3,
        height: 42,
        style: { display: 'inline-block' }
      })
    );

    tt.equal(anotherIcon.props.width, 3);
    tt.equal(anotherIcon.props.height, 42);
    tt.same(anotherIcon.props.style, { display: 'inline-block' });
    tt.end();
  });

  t.end();
});

test('the color property', function(t) {
  var icon;

  test('default is a function that returns the original color', function(tt) {
    icon = render(
      React.createElement(Icon, { name: 'foo'})
    );
    tt.type(icon.props.color, 'function');
    tt.equal(icon.props.color(null, 'green'), 'green');
    tt.end();
  });

  test('when it is a color string, it sets a global fill style', function(tt) {
    icon = render(
      React.createElement(Icon, { name: 'foo', color: 'red' })
    );
    tt.equal(icon.props.fill, 'red');
    tt.end();
  });

  test('it sets no global fill style when it is a function', function(tt) {
    icon = render(
      React.createElement(Icon, { name: 'foo',
        color: function () {}
      })
    );
    tt.equal(icon.props.fill, undefined);
    tt.end();
  });

  t.end();
});

test('rendering a non-existing icon', function(t) {
  var icon = render(
    React.createElement(Icon, { name: 'bar' })
  );

  t.equal(icon.type, 'div');
  t.equal(icon.props.children, 'Could not find icon called "bar"');
  t.end();
});

