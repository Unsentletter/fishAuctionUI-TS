import React from 'react'
import { connect } from 'react-redux'
import { getFishForSale } from '../../Actions/fishSaleActions'

import './index.scss'

import { ItemCard } from '../ItemCard'

export class ItemList extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    this.props.getFishForSale()
  }

  render() {
    return (
      <div className="item-list">
        {this.props.fishForSale.reverse().map((fish, index) => {
          console.log(fish)
          return (
            <ItemCard
              name={fish.name}
              price={fish.price}
              key={index}
              description={fish.description}
              location={fish.location}
              timePosted={fish.timePosted}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { fishForSale: state.forSale.fishForSale }
}

export default connect(
  mapStateToProps,
  { getFishForSale }
)(ItemList)
