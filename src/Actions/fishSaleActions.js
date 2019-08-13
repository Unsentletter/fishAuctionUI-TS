import server from '../api/server'

import { FOR_SALE } from './types'

export const getFishForSale = () => async dispatch => {
  try {
    const response = await server.get('/get-items')
    dispatch({ type: FOR_SALE, payload: response.data })
  } catch (e) {
    console.log('Get fish for sale error', e)
  }
}
