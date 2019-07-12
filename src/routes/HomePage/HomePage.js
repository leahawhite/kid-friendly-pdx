import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    
    return (
        <div className="hero">
          <header role="banner">
            <h1><Link to='/'>Kid-Friendly PDX</Link></h1>
            <p>Find the most welcoming spots in town.</p>
          </header>
          <SearchBar/>
        </div>  
    )
  }
}