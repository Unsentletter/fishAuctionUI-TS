import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface ILoginState {
  email: string;
  password: string;
}

export class Login extends React.Component<{}, ILoginState> {
  public state: ILoginState;
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  private handleClick = () => {
    axios.post('http://localhost:5000/login', {
      email: this.state.email,
      password: this.state.password
    }).then((res: any) => {
      localStorage.setItem('token', res.data);
      console.log("LOGGED IN", res.data);
    })
  };

  private handleChange = (event: any) => {
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

  public render() {
    return (
        <form>
          <div className='input-field'>
            <label >Email:</label><input name='email' id='email' type='text' value={this.state.email} onChange={this.handleChange} /><br />
          </div>
          Password: <input name='password' type='password' value={this.state.password} onChange={this.handleChange}/><br />
          <Link to={'/'} innerRef={this.handleClick}>
            <button className="btn">Submit</button>
          </Link>
        </form>
      )
  }
}