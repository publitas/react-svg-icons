var Icon = require('../');
var React = require('react');

var style = {
  margin: '40px',
  textAlign: 'center',
  fontFamily: 'Helvetica Neue'
};

React.render(
  <div style={style}>
    <h1 style={{fontWeight: 100, fontSize: 32}}>React SVG Icons</h1>

    <Icon name='react-icon'
      width='256'
      height='256'
      color='#d7675a'
      onClick={function () { alert('yay') } }/>
    <br/>

    <Icon name='react-icon'
      width='128'
      height='128'
      color='#2e5765'/>
    <br/>

    <Icon name='react-icon'
      width='200'
      height='200'
      color='#999b95'/>

  </div>,
  document.getElementById('example')
);
