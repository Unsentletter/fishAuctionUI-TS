import * as React from 'react';

import './styles.css';

export interface IItemCardProps {
  name: string;
  price: string; // TODO - I think this should be a number
}

export class ItemCard extends React.Component<IItemCardProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    console.log("Card PROPS", this.props);
    return (
      <div className='card horizontal'>
        <div className="card-image">
          <img src="guppy.jpg" alt="This is a photo"/>
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