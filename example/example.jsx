const Icon = require('../');
const React = require('react');

const Example = React.createClass({

  render() {
    const style = {
      width: 400,
      margin: '40px auto',
      fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
      textAlign: 'center',
      color: '#525252',
    };

    return <div style={style}>
      <h2>Original Icon</h2>
      <Icon name='react-icon'
        width='200'
        height='200'/>

      <h2>Single Color</h2>
      <Icon name='react-icon'
        width='200'
        height='200'
        color='#00d0a8'/>

      <h2>Multiple Colors</h2>
      <Icon name='react-icon'
        width='200'
        height='200'
        color={function(type, original) {
          let color;
          if (original === '#ff004a') {
            color = '#0f7ca3';
          } else {
            color = '#ad6042';
          }

          return color;
        }}/>

        <h2>Tiny</h2>
        <Icon name='react-icon'
          width='20'
          height='20'
          color='#333'/>
    </div>;
  }
});

React.render(<Example />,  document.getElementById('example'));
