import React, { Component } from 'react';
import './LoginForm.css';

export default class LoginForm extends Component {
  render() {
    return (
      <form className="login-form">
          <div className="email_address">
            <label htmlFor="login-form__email_address">
              Email address
            </label>
            <input
              name="email_address"
              type="text"
              required
              id="login-form__email_address">
            </input>
          </div>
          <div className="password">
            <label htmlFor="login-form__password">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              id="login-form__password">
            </input>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
    )
  }
}