import axios from 'axios';
import * as React from "react";

export interface IUserProfileState {
  email: string;
  username: string;
}

export class UserProfile extends React.Component<{}, IUserProfileState> {
  public state: IUserProfileState;
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      username: ''
    }
  }

  public componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/users/me', {headers: {token}})
      .then((user: any) => {
        console.log("DETIALS", user.data.user[0]);
        const userDetails = user.data.user[0];
        this.setState({
          email: userDetails.email,
          username: userDetails.username
        })
      });
  }

  public render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
