jest.dontMock('../index');

describe('Icon', function() {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var Icon = require('../index');

  it('renders existing icons', function() {
    var icon = TestUtils.renderIntoDocument(
      React.createElement(Icon, { name: 'foo' })
    );

    expect(icon.getDOMNode().innerHTML).toEqual(
      '<circle fill="green" data-reactid=".0.0"></circle>'
    );
  });

  it('provides a default height and width', function() {
    var icon = TestUtils.renderIntoDocument(
      React.createElement(Icon, { name: 'foo' })
    );

    expect(icon.getDOMNode().getAttribute('height')).toEqual('16');
    expect(icon.getDOMNode().getAttribute('width')).toEqual('16');
  });

  it('accepts a height and width', function() {
    var icon = TestUtils.renderIntoDocument(
      React.createElement(Icon, { name: 'foo', height: 42, width: 3 })
    );

    expect(icon.getDOMNode().getAttribute('height')).toEqual('42');
    expect(icon.getDOMNode().getAttribute('width')).toEqual('3');
  });


  it('passes props down to rendered icons', function() {
    var icon = TestUtils.renderIntoDocument(
      React.createElement(Icon, { name: 'foo', viewBox: '0 0 42 42' })
    );

    expect(icon.getDOMNode().getAttribute('viewbox')).toEqual('0 0 42 42');
  });

  it('renders a warning for non-existing icons', function() {
    var icon = TestUtils.renderIntoDocument(
      React.createElement(Icon, { name: 'bar' })
    );

    expect(icon.getDOMNode().textContent).toEqual(
      'Could not find icon called "bar"'
    );
  });
});
