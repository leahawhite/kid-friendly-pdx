import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignupForm.css';

export default class SignupForm extends Component {
  render() {
    return(
      <>
        <form className="signup-form">
            <div className="full_name">
              <label htmlFor="signup-form__full_name">
                Full name
              </label>
              <input
                name="full_name"
                type="text"
                required
                id="signup-form__full_name">
              </input>
            </div>
            <div className="email_address">
              <label htmlFor="signup-form__email_address">
                Email address
              </label>
              <input
                name="email_address"
                type="text"
                required
                id="signup-form__email_address">
              </input>
            </div>
            <div className="password">
              <label htmlFor="signup-form__password">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                id="signup-form__password">
              </input>
            </div>
            <div className="display_name">
              <label htmlFor="signup-form__display_name">
                Display name
              </label>
              <input
                name="display_name"
                type="text"
                required
                id="signup-form__display_name">
              </input>
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <div className="login-reminder">Already have an account?
            <Link to='/login'>
              Log in.
            </Link>
          </div>
        </>
    )
  }
}