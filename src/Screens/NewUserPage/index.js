import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Button } from '../../Components/Button/index'

import './index.scss';

export class NewUser extends Component {
  constructor(props) {
  super(props);
    this.state = {
      email: '',
      password: '',
      phone_number: '',
      username: ''
    }
  }


  handleClick = (e) => {
    const { email, password, phone_number, username} = this.state;
    axios.post('http://localhost:5000/createUser', {
      email, password, phone_number, username
    }).then((res) => {
      localStorage.setItem('token', res.data);
      console.log("Token", res.data)
    })
  };

  handleChange = (event) => {
    const { value } = event.target;
    switch(event.target.name) {
      case 'email':
        this.setState({ email: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
      case 'username':
        this.setState({ username: value });
        break;
      case 'phoneNumber':
        this.setState({ phone_number: value });
        break;
      default:
        throw new Error('Incorrect data passed');
    }
};

  render() {
    return (
      <div className='outer'>
        <div className='create'>
          <form>
          Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br />
          Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br />
          Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange}/><br />
          Phone number: <input name='phoneNumber' type='text' value={this.state.phone_number} onChange={this.handleChange}/><br />
            <Link to={'/user_profile'} innerRef={this.handleClick}>
              <Button label='Submit' />
            </Link>
          </form>
        </div>
      </div>
    )
  }
}