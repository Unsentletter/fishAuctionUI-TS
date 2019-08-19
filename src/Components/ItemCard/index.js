import React from 'react'
import { Link } from 'react-router-dom'

import './index.scss'

export const ItemCard = props => {
  return (
    <Link to={'/item_page'}>
      <div className="card small horizontal">
        <div className="card-image">
          <img src="../../../public/guppy.jpg" alt="This is a photo" />
        </div>
        <div className="card-stacked">
          <div className="card-text">
            <div className="card-top-line">
              <div className="name">{props.name}</div>
              <div className="price">{props.price}</div>
            </div>
            <div className="name-line">
              <div>Poster name,</div>
              <div> {props.location}</div>
            </div>
            <div>{props.timePosted}</div>
            <div className="description">{props.description}</div>
          </div>
        </div>
      </div>
    </Link>
  )
}
