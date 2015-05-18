require('babelify/polyfill');
const Icon = require('../');
const React = require('react');
const {assign} = Object;

const colors = [
  '#25B8CF',
  '#D7675A',
  '#D3B632'
];

const style = {
  textAlign: 'center',
  fontFamily: 'Helvetica Neue',
  background: '#1F3645',
  color: colors[0],
  height: '100%'
};

const wrapperStyle = {
  display: 'inline-block',
  position: 'relative',
  margin: 40
};

const headerStyle = {
  fontWeight: 100,
  fontSize: 40,
  margin: '0 0 40px 0'
};

const colorPicker = {
  style: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    position: 'absolute',
    left: 0,
    bottom: 0
  },
  itemStyle: {
    width: 12,
    height: 12,
    boxSizing: 'border-box',
    borderRadius: 2,
    marginBottom: 32,
    cursor: 'pointer'
  }
};

const Example = React.createClass({
  getInitialState() {
    return {
      color: colors[0]
    };
  },

  setColor(c) {
    this.setState({ color: c });
  },

  renderColorPickerOptions() {
    return colors.map((c) => this.renderColorPickerOption(c));
  },

  renderColorPickerOption(color) {
    let style = assign({},
      colorPicker.itemStyle,
      { background: color },
      (color === this.state.color) && { border: '2px solid #fff' }
    );

    return <li style={style} onClick={ () => this.setColor(color) }></li>;
  },

  render() {
    return <div style={style}>
      <div style={wrapperStyle}>
        <h1 style={headerStyle}>React SVG Icons</h1>

        <Icon name='react-icon'
          width='200'
          height='200'
          color={this.state.color}/>

        <ul style={colorPicker.style}>
          { this.renderColorPickerOptions() }
        </ul>
      </div>
    </div>;
  }
});

const domEl = document.getElementById('example');
domEl.style.height = '100%';
React.render(<Example />, domEl);
