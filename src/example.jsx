const Icon = require('react-svg-icons');
const React = require('react');
const assign = React.__spread;

const colors = [
  '#25B8CF',
  '#D7675A',
  '#D3B632'
];

const style = {
  textAlign: 'center',
  fontFamily: 'GlacialIndifferenceRegular, Helvetica Neue, Helvetica, Arial, sans-serif',
  background: '#1F3645',
  color: colors[0],
  height: '100%'
};

const wrapperStyle = {
  width: 440,
  padding: '40px 40px 0 40px',
  position: 'relative',
  margin: '0 auto'
};

const headerStyle = {
  fontWeight: 'normal',
  fontSize: 52,
  margin: '0 0 40px 0',
  textTransform: 'uppercase'
};

const subHeaderStyle = {
  fontWeight: 'normal',
  fontSize: 28,
  textTransform: 'uppercase',
  textAlign: 'left',
  margin: '50px 0 20px'
};

const colorPicker = {
  style: {
    margin: 0,
    padding: '16px 0 16px 32px',
    listStyleType: 'none'
  },
  itemStyle: {
    display: 'inline-block',
    width: 12,
    height: 12,
    boxSizing: 'border-box',
    borderRadius: 2,
    cursor: 'pointer',
    marginRight: 32
  }
};

const buttonStyle = {
  display: 'inline-block',
  border: '1px solid',
  borderRadius: 2,
  textDecoration: 'none',
  padding: '12px 44px',
  position: 'relative',
  width: 112,
  marginRight: 16
};

const buttonIconStyle = {
  position: 'absolute',
  left: 16,
  top: '50%'
};

const featureList = {
  style: {
    textAlign: 'left',
    fontSize: 22,
    lineHeight: 1.5,
    padding: '0 0 0 22px',
    margin: '0 0 40px 0',
    listStyleType: 'square'
  }
};

const Button = React.createClass({
  getInitialState() {
    return { hover: false };
  },

  style() {
    const normalStyle = {
      color: this.props.color,
      borderColor: this.props.color
    };

    const hoverStyle = {
      color: style.background,
      borderColor: this.props.color,
      background: this.props.color
    };

    return assign({},
      buttonStyle,
      ( this.state.hover ? hoverStyle : normalStyle )
    );
  },

  handleMouseEnter() {
    this.setState({ hover: true });
  },

  handleMouseLeave() {
    this.setState({ hover: false });
  },

  render() {
    return <a style={this.style()}
       onMouseEnter={this.handleMouseEnter}
       onMouseLeave={this.handleMouseLeave}
       href={this.props.href}>

      { this.props.renderIcon(this.state) }
      { this.props.text }
    </a>;
  }
});

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

  textStyle(styl) {
    return assign({}, styl, {
      color: this.state.color
    });
  },

  renderGithubIcon(params) {
    return <Icon name='github'
      style={assign({}, buttonIconStyle, { height: 20, marginTop: -10})}
      viewBox='0 0 1024 1024'
      color={params.hover ? style.background : this.state.color }/>;
  },

  renderNpmIcon(params) {
    const color = params.hover ? style.background : this.state.color;

    return <Icon name='npm'
      style={assign({}, buttonIconStyle, { height: 12, marginTop: -6})}
      height='16'
      color={ (_, orig) => { return (orig === '#FFF') ? 'none' : color; } }/>;
  },

  render() {
    return <div style={style}>
      <div style={wrapperStyle}>
        <h1 style={this.textStyle(headerStyle)}>React SVG Icons</h1>

        <Icon name='react-icon'
          width='200'
          height='200'
          color={this.state.color}/>

        <ul style={colorPicker.style}>
          { this.renderColorPickerOptions() }
        </ul>
      </div>

      <div style={wrapperStyle}>
        <ul style={this.textStyle(featureList.style)}>
          <li>Converts SVGs into configurable React components</li>
          <li>Inlines all SVGs in your asset directory</li>
          <li>Optimizes SVGs</li>
          <li>Browserify support only, at the moment</li>
        </ul>

        <h2 style={this.textStyle(subHeaderStyle)}>
          Learn More:
        </h2>

        <Button href='https://github.com/publitas/react-svg-icons'
          color={this.state.color}
          renderIcon={ this.renderGithubIcon }
          text='GitHub' />

        <Button href='https://www.npmjs.com/package/react-svg-icons'
          color={this.state.color}
          renderIcon={this.renderNpmIcon}
          text='npm' />
      </div>
    </div>;
  }
});

const domEl = document.getElementById('example');
domEl.style.height = '100%';
React.render(<Example />, domEl);
