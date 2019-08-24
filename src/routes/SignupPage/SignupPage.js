import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

export default class SignupPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section className="SignupPage">
        <div className="SignupPage-container">
          <h2>Sign Up</h2>
          <SignupForm onSignUpSuccess={this.handleSignUpSuccess} />
          <div className="signup-reminder">Already have an account?{' '}
            <Link to='/login'>
              Log in.
            </Link>
          </div>
        </div>
      </section>
    )
  }
}