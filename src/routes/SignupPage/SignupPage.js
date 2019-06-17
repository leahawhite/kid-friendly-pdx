import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

export default class SignupPage extends Component {
  render() {
    return (
      <section className="SignupPage">
        <h2>Sign Up</h2>
        <SignupForm />
      </section>
    )
  }
}