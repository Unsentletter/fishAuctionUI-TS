import * as React from 'react';

import './index.css'

export interface IButtonProps {
  label: string;
}

export class Button extends React.Component<IButtonProps> {
  public render() {
    return (
      <button className="btn waves-effect waves-light" type="submit" name="action">
        {this.props.label}
      </button>
    )
  }
}