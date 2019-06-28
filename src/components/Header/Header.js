import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

  renderLogoutLink() {
    const { onLogout } = this.props
    return (
      <nav className="Header__nav-logged-in" role="navigation">
        <Link 
          onClick={onLogout}
          to='/'>
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
            LOG IN
          </Link>
          <Link className="navlink-right" to='/signup'>
            SIGN UP
          </Link>
        </div>
      </nav>
    )
  }
  
  render() {
    const { loggedIn } = this.props
    return (
      <header className="Header" role="banner">
        <h1 className="Header__title">
          <NavLink exact to='/' activeClassName="hidden">
            KID-FRIENDLY PDX
          </NavLink>
        </h1>
        {loggedIn
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>    
    )
  }
}