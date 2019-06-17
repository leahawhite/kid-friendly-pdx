import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  handleLogoutClick = () => {
    // write service for clearing auth token
  }
  
  renderLogoutLink() {
    return (
      <nav className="Header__nav-logged-in" role="navigation">
        {/* Will logout go to homepage or previous page? */}
        <Link 
          onClick={this.handleLogoutClick}
          // or just to='/' 
          to={this.props.history.goBack()}>
          Logout
        </Link>
      </nav>
    )
  }
  
  renderLoginLink() {
    return (
      <nav className="Header__nav-not-logged-in" role="navigation">
        <div className="Header__nav-not-logged-in-links">
          <Link to='/login'>
            Log in
          </Link>
          <Link to='/signup'>
            Sign up
          </Link>
        </div>
      </nav>
    )
  }
  
  render() {
    return (
      <header className="Header" role="banner">
        {/* need to write function for nav h1 not showing up on HomePage */}
        <h1 className="Header__title">
          <Link to='/'>
            Kid-Friendly PDX
          </Link>
        </h1>
        {this.renderLoginLink()}
      </header>    
    )
  }
}