import axios from "axios/index";
import * as React from 'react';

import { ItemCard } from './ItemCard/ItemCard';

export interface IItemListState {
  items: any;
}

export class ItemList extends React.Component<{}, IItemListState> {
  public state: IItemListState;
  constructor(props: any) {
    super(props);
    this.state = {
      items: []
    }
  }

  public componentDidMount() {
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

  public render() {
    return (
      <div>
        {this.state.items.map((item: {[key :string]: string}, i: number) => {
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

