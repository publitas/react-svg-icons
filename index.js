var React = require('react');
var PropTypes = require('prop-types');
var toReact = require('svg-to-react');
var assign = require('object-assign');
var resolveAssetPath = require('./lib/resolve-asset-path');

var icons = {};
function renderFallback(name) {
  return function noSvg() {
    return React.createElement(
      'div',
      {style: {color: '#c1272a'}},
      'Could not find icon called "' + name + '"'
    );
  };
}

function Icon(props) {
  var renderIcon = icons[props.name] || renderFallback(props.name);

  var fill = (typeof props.color !== 'function') ? { fill: props.color } : {};

  return renderIcon(assign({}, props, fill));
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.any,
  preserveAspectRatio: PropTypes.string,
};

Icon.defaultProps = {
  color: function (_, original) {
    return original;
  },
  preserveAspectRatio: 'xMidYMid meet',
};

toReact.convertDir(resolveAssetPath(), function(err, svgIcons) {
  if (err) {
    throw new Error('Error loading icons: ' + err);
  }
  icons = svgIcons;
});

module.exports = Icon;
