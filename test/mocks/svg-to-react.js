var React = require('react');

exports.convertDir = function(_, callback) {
  callback(null, {
    foo: function(props) {
      return React.createElement('svg', props,
        React.createElement('circle', { fill: 'green' })
      );
    }
  });
};
