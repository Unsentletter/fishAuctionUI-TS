import axios from 'axios'

import { FOR_SALE } from './types'

export const getFishForSale = () => async dispatch => {
  try {
    const response = await axios.get('http://localhost:5000/get-items')

    console.log('ITEMS', response)

    dispatch({ type: FOR_SALE, payload: response.data })
  } catch (e) {
    console.log('Get fish for sale error', e)
  }
}
