import React, { Component } from 'react';
import './SignupForm.css';

export default class SignupForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.state = {
      display_name: "",
      email: "",
      password: "",
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    // const display_name = this.nameInput.current.value;
    // const email = this.emailInput.current.value;
    // const password = this.passwordInput.current.value;
    this.props.onSignUpSuccess();
    // validate values on server and push email and password to login page inputs
  }

  render() {
    return(
      <>
        <form className="signup-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="display_name">
              <label htmlFor="display_name">
                Display name
              </label>
              <input
                name="display_name"
                type="text"
                id="display_name"
                aria-label="display name"
                aria-required="true"
                placeholder="Mr. Mister"
                ref={this.nameInput}
                required
                minLength="3"
              />
            </div>
            <div className="email">
              <label htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                aria-label="email address"
                aria-required="true" 
                placeholder="mrmr@mister.com"
                required
                ref={this.emailInput}
              />
            </div>
            <div className="password">
              <label htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                aria-label="password"
                aria-required="true"
                aria-describedby="signup__hint"
                minLength="6"
                maxLength="72"
                pattern=".*[0-9]" 
                required
                ref={this.passwordInput}
              />
              <div className="signup__hint" id="signup__hint">6 to 72 characters, must include a number</div>
            </div>
            <button type="submit" className="signup-btn" >
              Sign Up
            </button>
          </form>
        </>
    )
  }
}