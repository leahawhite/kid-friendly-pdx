import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './HomePage.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      category: '',
      neighborhood: '',
      fireRedirect: false,
      error: null,
    }
  }

  handleUpdateSearch = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleUpdateCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleUpdateNeighborhood = event => {
    this.setState({
      neighborhood: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true })
  }
  
  render() {
    const { searchTerm, category, neighborhood, fireRedirect } = this.state
    return (
        <div className="hero">
          <header role="banner">
            <h1><Link to='/'>Kid-Friendly PDX</Link></h1>
            <p>Find the most welcoming spots in town.</p>
          </header>
          <SearchBar 
            searchTerm={searchTerm}
            category={category}
            neighborhood={neighborhood}
            fireRedirect={fireRedirect}
            handleUpdateSearch={this.handleUpdateSearch}
            handleUpdateCategory={this.handleUpdateCategory}
            handleUpdateNeighborhood={this.handleUpdateNeighborhood}
            handleSubmit={this.handleSubmit}
          />
          {fireRedirect && 
            <Redirect to={{
              pathname: '/places',
              state: { searchTerm, category, neighborhood } 
            }}
          />}
        </div>  
    )
  }
}