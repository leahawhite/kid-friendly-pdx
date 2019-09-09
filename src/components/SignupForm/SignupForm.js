import React, { Component } from 'react'
import AuthApiService from '../../services/auth-api-service'
import './SignupForm.css'

export default class SignupForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      error: null
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const { display_name, email, password } = event.target
    this.setState({ error: null })
    AuthApiService.signupUser({
      display_name: display_name.value, 
      email: email.value, 
      password: password.value 
    })
      .then(user => {
        display_name.value = ''
        email.value = ''
        password.value = ''
        this.props.onSignUpSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }
    
  render() {
    const { error } = this.state
    
    return (
      <form className="signup-form" onSubmit={this.handleSubmit}>
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className="display_name">
          <label htmlFor="display_name">
            Display name 
            <span className="signup-rule" id="signup-rule"> -- between 3 and 20 characters</span>
          </label>
          <input
            name="display_name"
            type="text"
            id="display_name"
            aria-label="display name"
            aria-required="true"
            aria-describedby="signup-rule"
            required
            minLength="3"
            maxLength="20"
            autoComplete="off"
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
            required
            autoComplete="off"
          />
        </div>
        <div className="password">
          <label htmlFor="password">
            Password 
            <span className="signup-rule" id="signup-rule"> -- at least 6 characters, one number</span>
          </label>
          <input
            name="password"
            type="password"
            id="password"
            aria-label="password"
            aria-required="true"
            aria-describedby="signup-rule"
            minLength="6"
            maxLength="36"
            pattern=".*[0-9].*" 
            required
            autoComplete="off"
          />
        </div>
        <button type="submit" className="signup-btn" aria-label="sign up">
          Sign Up
        </button>
      </form>
    )
  }
}