import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Login extends Component {
  constructor(props) {
    super(props, null, null);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleClick = () => {
    axios.post('http://localhost:5000/login', {
      email: this.state.email,
      password: this.state.password
    }).then(res => {
      localStorage.setItem('token', res.data);
      console.log("LOGGED IN", res.data);
    })
  };

  handleChange = (event) => {
    switch(event.target.name) {
      case 'email':
        this.setState({email: event.target.value});
        break;
      case 'password':
        this.setState({password: event.target.value});
        break;
      default:
        throw new Error('Only email and password can be updated');
    }
  };

  render() {
    return (
      <form>
        Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br />
        Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br />
        <Link to={'/user_profile'} innerRef={this.handleClick}>
          <button className="btn">Submit</button>
        </Link>
      </form>
    )
  }
}