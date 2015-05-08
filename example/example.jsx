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

    <Icon name='reactIcon'
      width='256'
      height='256'
      color='#4cd695'/>
    <br/>

    <Icon name='reactIcon'
      width='128'
      height='128'
      color='#d8494c'/>
    <br/>

    <Icon name='reactIcon'
      width='64'
      height='64'
      color='#eea43c'/>

  </div>,
  document.getElementById('example')
);
