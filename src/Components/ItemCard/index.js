import React, { Component } from 'react';

import './index.scss';

export class ItemCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Card PROPS", this.props);
    return (
      <div className='card horizontal'>
        <div className="card-image">
          <img src="../../../public/guppy.jpg" alt="This is a photo"/>
        </div>
        <div className='card-stacked'>
          <div className='card-text'>
            <div className='card-top-line'>
              <div className='name'>{this.props.name}</div>
              <div className='price'>{this.props.price}</div>
            </div>
            <div>Location</div>
            <div>Time posted</div>
          </div>
        </div>
      </div>
    )
  }
}