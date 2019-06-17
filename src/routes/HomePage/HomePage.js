import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchContext from '../../contexts/SearchContext';
import './HomePage.css';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  
  static contextType = SearchContext

  render() {
    return (
        <div className="hero">
          <header role="banner">
            <h1>Kid-Friendly PDX</h1>
            <p>Find the most welcoming spots in town.</p>
          </header>
          <SearchBar
            places={this.context.places}
            searchTerm={this.context.searchTerm}
            category={this.context.category}
            neighborhood={this.context.neighborhood}
            handleSubmit={this.context.handleSubmit}
            handleSearchChange={this.context.handleSearchChange}
            handleCategoryChange={this.context.handleCategoryChange}
            handleNeighborhoodChange={this.context.handleNeighborhoodChange}
            fireRedirect={this.context.fireRedirect} />
        </div>  
    )
  }
}