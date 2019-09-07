import React, { Component } from 'react';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service'
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

    AuthApiService.loginUser({
      email: email.value,
      password: password.value,
    })
      .then(res => {
        email.value = ''
        password.value = ''
        TokenService.saveAuthToken(res.authToken)
        this.props.onLoginSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    const { error } = this.state
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className="email">
          <label htmlFor="email">
            Email address
          </label>
          <input
            name="email"
            type="text"
            aria-label="email address"
            aria-required="true"
            required
            id="email"
            autoComplete="off" />
        </div>
        <div className="password">
          <label htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            aria-label="password"
            aria-required="true"
            required
            id="password"
            autoComplete="off" />
        </div>
        <button type="submit" className="login-btn">
          Log In
        </button>
          <p>Demo email: demo@demo.com</p>
          <p>Demo password: demo123</p>
      </form>
    )
  }
}