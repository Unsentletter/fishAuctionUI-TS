import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Actions/userActions';

import { Button } from '../../Components/Button/index';

import './index.scss';

export class Login extends React.Component {
  constructor(props) {
    super(props, null, null);
    this.state = {
      email: '',
      password: '',
    };
  }

  // TODO: Handle click without data entered. Dont do anything, maybe use validate.js to validate and disable button until complete

  handleClick = e => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.login({ email, password }, () => {
      this.props.history.push('/user_profile');
    });
  };

  handleChange = event => {
    switch (event.target.name) {
      case 'email':
        this.setState({ email: event.target.value });
        break;
      case 'password':
        this.setState({ password: event.target.value });
        break;
      default:
        throw new Error('Only email and password can be updated');
    }
  };

  render() {
    return (
      <div className='outer'>
        <div className='login'>
          <form className='form'>
            Email:{' '}
            <input
              name='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            Password:{' '}
            <input
              name='password'
              type='text'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <Button
              onClick={this.handleClick}
              label='Submit'
              className='Submit'
              name='loginButton'
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions,
)(Login);
