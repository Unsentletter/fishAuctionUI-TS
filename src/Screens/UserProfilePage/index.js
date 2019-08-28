import React, { Component } from 'react';
import RequireAuth from '../../Components/requireAuth';
import { connect } from 'react-redux';

class UserProfile extends Component {
  render() {
    return <div>User Profile</div>;
  }
}

export default RequireAuth(UserProfile);
