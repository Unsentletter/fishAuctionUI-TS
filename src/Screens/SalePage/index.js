import React, { Component } from 'react';
import { ItemList } from "../ItemList";

import './index.scss'

export class SalePage extends Component {
  render() {
    return(
      <div className='sale-page'>
        <div className='item-list'>
          <ItemList/>
        </div>
      </div>
    )
  }
}