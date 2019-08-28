import { combineReducers } from 'redux';
import auth from './auth';
import forSale from './forSale';
export default combineReducers({ auth, forSale });
