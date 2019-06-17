import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <section className="LoginPage">
        <h2>Log In</h2>
        <LoginForm />
      </section>
    )
  }
}