import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions/userActions'

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout()
  }
  render() {
    return <div>signout</div>
  }
}

export default connect(
  null,
  actions
)(Signout)
