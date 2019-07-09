import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        className="btn waves-effect waves-light"
        onClick={this.props.handleClick}
      >
        {this.props.label}
      </button>
    )
  }
}