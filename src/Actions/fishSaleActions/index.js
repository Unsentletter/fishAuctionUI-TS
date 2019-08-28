import server from '../../api/server';
import axios from 'axios';

import { FOR_SALE } from '../types';

export const getFishForSale = () => async dispatch => {
  try {
    // TODO - Work out how to test axios with the server file
    const response = await axios.get('http://localhost:5000/get-items');
    dispatch({ type: FOR_SALE, payload: response.data });
  } catch (e) {
    console.error('Get fish for sale error', e);
  }
};
