import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

export const ItemCard = props => {
  return (
    <Link to={'/item_page'}>
      <div className='card horizontal'>
        <div className="card-image">
          <img src="../../../public/guppy.jpg" alt="This is a photo"/>
        </div>
        <div className='card-stacked'>
          <div className='card-text'>
            <div className='card-top-line'>
              <div className='name'>{props.name}</div>
              <div className='price'>{props.price}</div>
            </div>
            <div className='name-line'>
              <div>Poster name, </div>
              <div>Location</div>
            </div>
            <div>Time posted</div>
            <div className='description'>Item description - This fish is very fishy. It likes to swim, eat food, and make babies. It is a fan of the oxford comma and is willing to egg your house if you think any differently about it. It will also shit on your windscreen if you eat his turkey sandwiches</div>
          </div>
        </div>
      </div>
    </Link>
  )
}