import * as React from "react";
import axios from 'axios';

export interface IUserProfileState<string> {
  email: string;
  username: string;
}

export class UserProfile extends React.Component<{}, IUserProfileState> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      username: ''
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/users/me', {headers: {token}})
      .then((user: any) => {
        console.log("DETIALS", user.data.user[0])
        const userDetails = user.data.user[0]
        this.setState({
          email: userDetails.email,
          username: userDetails.username
        })
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
      </div>
    )
  }
}
