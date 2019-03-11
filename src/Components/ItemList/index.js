import React, { Component } from 'react';
import axios from "axios";

import { ItemCard } from '../ItemCard';

export class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/get-items')
      .then((data) => {
        console.log(data.data)
        this.setState({items: data.data})
      })
  }
  //
  // listItems() {
  //   console.log(111,this.state);
  //   {)}
  //
  //   console.log(this.state.items)
  // }

  render() {
    return (
      <div>
        {this.state.items.map((item, i) => {
          return (
            <ItemCard
              name={item.name}
              price={item.price}
              key={i}
            />
          )
        })}
      </div>
    )
  }
}