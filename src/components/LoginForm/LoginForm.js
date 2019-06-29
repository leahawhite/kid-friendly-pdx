import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import './LoginForm.css';

export default class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {}
  }

  constructor(props) {
    super(props)
    this.state = {
      error: null,
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ error: null })
    const { email, password } = event.target
    const token = 'dummyToken'
    TokenService.saveAuthToken(token)
    this.props.onLoginSuccess(email, password)
  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div className="email">
          <label htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            type="text"
            required
            id="email" />
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            id="password" />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
      </form>
    )
  }
}