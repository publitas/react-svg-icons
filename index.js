var React = require('react');
var toReact = require('svg-to-react');
var assign = require('react/lib/Object.assign');
var resolveAssetPath = require('./lib/resolve-asset-path');

var icons = {};
var Icon = React.createClass({
  displayName: 'Icon',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    color: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      width: 16,
      height: 16,
      color: '#000'
    };
  },

  renderFallback: function() {
    return React.createElement('div', {style: {color: '#c1272a'}},
      'Could not find icon called "'+this.props.name+'"'
    );
  },

  render: function() {
    var renderIcon = icons[this.props.name] || this.renderFallback;
    var props = assign( {}, this.props, {
      preserveAspectRatio: 'xMidYMid meet',  // preserve aspect ratio and center
      style: assign( { verticalAlign: 'middle' },
        this.props.style
      ),
      fill: this.props.color
    });

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
