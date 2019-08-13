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
    console.log('PROPS', await this.props.getFishForSale())
  }

  render() {
    return <div className="item-list" />
  }
}

function mapStateToProps(state) {
  console.log('STATE', state.forSale)
  return { fishForSale: state.forSale }
}

export default connect(
  null,
  { getFishForSale }
)(ItemList)
