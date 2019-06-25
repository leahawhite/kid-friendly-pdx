import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
    const { history } = this.props
    this.props.onLogin()
    history.goBack()
  }

  render() {
    const { onLogin } = this.props
    return (
      <section className="LoginPage">
        <h2>Log In</h2>
        <LoginForm
          onLogin={onLogin}
          onLoginSuccess={this.handleLoginSuccess} />
        <div className="login-reminder">New around here?{' '}
          <Link to='/signup'>
            Sign up.
          </Link>
        </div>
      </section>
    )
  }
}