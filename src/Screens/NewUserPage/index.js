import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import { Button } from '../../Components/Button/index'

import './index.scss'

export class NewUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
    }
  }

  handleClick = e => {
    const { email, password, username } = this.state
    e.preventDefault()
    this.props.signup({ email, password, username }, () => {
      this.props.history.push('/user_profile')
    })
  }

  handleChange = event => {
    const { value } = event.target
    switch (event.target.name) {
      case 'email':
        this.setState({ email: value })
        break
      case 'password':
        this.setState({ password: value })
        break
      case 'username':
        this.setState({ username: value })
        break
      default:
        throw new Error('Incorrect data passed')
    }
  }

  render() {
    return (
      <div className="outer">
        <div className="create">
          <form>
            Email:{' '}
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br />
            Password:{' '}
            <input
              name="password"
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            Username:{' '}
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <br />
            <button
              className="btn waves-effect waves-light"
              label="Submit"
              onClick={this.handleClick}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  actions
)(NewUser)
