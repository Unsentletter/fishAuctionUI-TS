import axios from 'axios';

import { AUTH_USER } from './types';

export const signup = (
  { email, password, username },
  callback,
) => async dispatch => {
  try {
    const response = await axios.post(
      'http://localhost:5000/createUser',
      {
        email,
        password,
        username,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data);
    callback();
  } catch (e) {
    console.log('CREATE USER ERROR', e);
  }
};

export const login = ({ email, password }, callback) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    dispatch({ type: AUTH_USER, payload: response.data });
    localStorage.setItem('token', response.data);
    callback();
  } catch (e) {
    console.log('LOGIN ERROR', e);
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};
