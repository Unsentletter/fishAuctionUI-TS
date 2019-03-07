import React, { Component } from 'react';

export class Button extends Component {
  public render() {
    return (
      <button className="btn waves-effect waves-light" type="submit" name="action">
        {this.props.label}
      </button>
    )
  }
}