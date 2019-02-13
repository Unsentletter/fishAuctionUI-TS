import * as React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export interface ILoginState {
  email: string;
  password: string;
}

export class Login extends React.Component<{}, ILoginState> {
  state: ILoginState;
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleClick = () => {
    axios.post('http://localhost:5000/login', {
      email: this.state.email,
      password: this.state.password
    }).then((res: any) => {
      localStorage.setItem('token', res.data);
      console.log("LOGGED IN", res.data);
    })
  };

  handleChange = (event: any) => {
    this.setState({[event.target.name]: event.target.value});
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