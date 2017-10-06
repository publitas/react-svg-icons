const Icon = require('../');
const React = require('react');
const ReactDOM = require('react-dom');

const style = {
  width: 400,
  margin: '40px auto',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  textAlign: 'center',
  color: '#525252',
};

function color(type, original) {
  return original === '#ff004a' ? '#0f7ca3' : '#ad6042';
}

const Example = () => {
  return (
    <div style={style}>
      <h2>Original Icon</h2>
      <Icon
        name='react-icon'
        width='200'
        height='200'
      />

      <h2>Single Color</h2>
      <Icon
        name='react-icon'
        width='200'
        height='200'
        color='#00d0a8'
      />

      <h2>Multiple Colors</h2>
      <Icon
        name='react-icon'
        width='200'
        height='200'
        color={color}
      />

      <h2>Tiny</h2>
      <Icon
        name='react-icon'
        width='20'
        height='20'
        color='#333'
      />
    </div>
  );
};

ReactDOM.render(<Example />,  document.getElementById('example'));
