import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      on: false
    };

    this.styles = {
      toggle: {
        display: 'inline-block',
        background: '#969696',
        borderRadius: 10,
        height: 10,
        width: 25,
        cursor: 'pointer'
      },

      switch: {
        display: 'inline-block',
        width: 10,
        height: 10,
        border: '1px solid #d1d1d1',
        borderRadius: 10,
        background: '#fff',
        padding: 0,
        margin: '0px 0px 0px 0px',
        float: this.state.on ? 'left' : 'right'
      }
    };

    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.styles.switch.float = !this.state.on ? 'left' : 'right';
    this.setState({ on: !this.state.on });
  }

  render() {
    return (
      <div style={this.styles.toggle} onClick={this.toggleClick}>
        <div style={this.styles.switch}>
        </div>
      </div>
    );
  }
}