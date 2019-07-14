import React, { Component } from "react";
import { connect } from "react-redux";

class UserProfile extends Component {
  render() {
    return <div>User Profile</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps)(UserProfile);
