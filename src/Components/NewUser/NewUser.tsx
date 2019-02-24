import axios from 'axios';
import * as React from 'react';
import { Link } from 'react-router-dom';

export interface INewUserState {
  email: string;
  password: string;
  phoneNumber: string;
  username: string;
}

const updateState = <T extends string>(key: keyof INewUserState, value: T) => (
  prevState: INewUserState
): INewUserState => ({
  ...prevState,
  [key]: value
});

export class NewUser extends React.Component<{}, INewUserState> {
  public state: INewUserState;
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      phoneNumber: '',
      username: ''
    }
  }


  private handleClick = (e: any) => {
    axios.post('http://localhost:5000/createUser', {
      email: this.state.email,
      password: this.state.password,
      phone_number: this.state.phoneNumber,
      username: this.state.username
    }).then((res: any): any => {
      localStorage.setItem('token', res.data);
      console.log("Token", res.data)
    })
  };

  private handleChange = (event: any) => {
    this.setState(updateState(event.target.name, event.target.value));
  };

  public render() {
    return (
      <form>
        Email: <input name='email' type='text' value={this.state.email} onChange={this.handleChange}/><br />
        Password: <input name='password' type='text' value={this.state.password} onChange={this.handleChange}/><br />
        Username: <input name='username' type='text' value={this.state.username} onChange={this.handleChange}/><br />
        Phone number: <input name='phoneNumber' type='text' value={this.state.phoneNumber} onChange={this.handleChange}/><br />
        <Link to={'/user_profile'} innerRef={this.handleClick}>
          <button>Submit</button>
        </Link>
      </form>
    )
  }
}