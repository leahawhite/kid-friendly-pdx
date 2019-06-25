import React, { Component } from 'react';
import ValidationError from '../ValidationError';
import data from '../../data';
import './SignupFormCustom.css';

export default class SignupForm extends Component {
  static defaultProps = {
    onSignUpSuccess: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      users: data.users,
      display_name: "",
      email: "",
      password: "",
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      validationMessages: {
        display_name: "",
        email: "",
        password: "",
      },
    }
  }

  updateName = display_name => {
    this.setState({display_name}, () => {this.validateName(display_name)});
  }

  updateEmail = email => {
    this.setState({email}, () => {this.validateEmail(email)});
  }
  
  updatePassword = password => {
    this.setState({password}, () => {this.validatePassword(password)});
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { display_name, email, password } = this.state;
    console.log('Name: ', display_name);
    console.log('Email: ', email);
    console.log('Password: ', password);
    this.props.onSignUpSuccess(display_name, email, password);
  }

  validateName(fieldValue) {
    const { users } = this.state;
    const fieldErrors = {...this.state.validationMessages};
    let hasError = false;

    fieldValue = fieldValue.toString().trim();
    if(fieldValue.length === 0) {
      fieldErrors.display_name = 'Display name is required';
      hasError = true;
    } else {
      if (fieldValue.length < 3) {
        fieldErrors.display_name = 'Dispay name must be at least 3 characters long';
        hasError = true;
      } else {
        // if fieldValue exists in database already
        if (users.some(user => user.display_name.toLowerCase().includes(fieldValue.toLowerCase()))) {
          fieldErrors.display_name = 'Display name is already in use. Please choose another.';
          hasError = true;
        } else {
          fieldErrors.display_name = '';
          hasError = false;
        }
      }
    }
    this.setState({
      validationMessages: fieldErrors,
      nameValid: !hasError
    }, this.formValid );
  }

  validateEmail(fieldValue) {
    const fieldErrors = {...this.state.validationMessages};
    let hasError = false;

    fieldValue = fieldValue.toString().trim();
    if(fieldValue.length === 0) {
      fieldErrors.email = 'Email address is required';
      hasError = true;
    } else {
      if(!fieldValue.match(new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/))) {
        fieldErrors.email = 'Email address is invalid';
        hasError = true;
      } else {
          fieldErrors.password = '';
          hasError = false;
        }
      }
    this.setState({
      validationMessages: fieldErrors,
      emailValid: !hasError
    }, this.formValid );
  }
  
  validatePassword(fieldValue) {
    const fieldErrors = {...this.state.validationMessages};
    let hasError = false;

    fieldValue = fieldValue.toString().trim();
    if(fieldValue.length === 0) {
      fieldErrors.password = 'Password is required';
      hasError = true;
    } else {
      if (fieldValue.length < 6 || fieldValue.length > 72) {
        fieldErrors.password = 'Password must be between 6 and 72 characters long';
        hasError = true;
      } else {
        if(!fieldValue.match(new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/))) {
          fieldErrors.password = 'Password must contain at least one number and one letter';
          hasError = true;
        } else {
          fieldErrors.password = '';
          hasError = false;
        }
      }
    }
    this.setState({
      validationMessages: fieldErrors,
      passwordValid: !hasError
    }, this.formValid );
  }

  formValid() {
    this.setState({
      formValid: this.state.nameValid && this.state.emailValid && this.state.passwordValid
    })
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
                placeholder="Mr. Mister"
                required
                minLength="3"
                onChange={e => this.updateName(e)} />
              <ValidationError hasError={this.state.nameValid} message={this.state.validationMessages.display_name} />
            </div>
            <div className="email">
              <label htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email" 
                placeholder="mrmr@mister.com"
                required
                onChange={e => this.updateEmail(e)} />
              <ValidationError hasError={this.state.emailValid} message={this.state.validationMessages.email} />
            </div>
            <div className="password">
              <label htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                minLength="6"
                maxLength="72"
                pattern="(?=.*[0-9])" 
                required
                onChange={e => this.updatePassword(e)}/>
              <ValidationError hasError={this.state.passwordValid} message={this.state.validationMessages.password} />
              <div className="registration__hint">6 to 72 characters, must include a number</div>
            </div>
            <button type="submit" className="signup-btn" disabled={!this.state.formValid} >
              Sign Up
            </button>
          </form>
        </>
    )
  }
}