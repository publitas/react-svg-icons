var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var toReact = require('svg-to-react');
var assign = require('object-assign');
var resolveAssetPath = require('./lib/resolve-asset-path');

var icons = {};
var Icon = createReactClass({
  displayName: 'Icon',

  propTypes: {
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.any
  },

  getDefaultProps: function() {
    return {
      color: function (_, original) {
        return original;
      }
    };
  },

  renderFallback: function() {
    return React.createElement('div', {style: {color: '#c1272a'}},
      'Could not find icon called "'+this.props.name+'"'
    );
  },

  render: function() {
    var renderIcon = icons[this.props.name] || this.renderFallback;
    var props = assign( {},
      { preserveAspectRatio: 'xMidYMid meet' }, // preserve aspect ratio and center
      typeof this.props.color !== 'function' ? { fill: this.props.color } : {},
      this.props
    );

    return renderIcon(props);
  }
});

toReact.convertDir(resolveAssetPath(), function(err, svgIcons) {
  if (err) {
    throw new Error('Error loading icons: '+ err);
  }
  icons = svgIcons;
});
module.exports = Icon;
