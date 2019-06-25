import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      category: 'all',
      neighborhood: 'All Portland',
      fireRedirect: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true })
  }  

  handleUpdateSearch = term => {
    this.setState({
      searchTerm: term
    })
  }

  handleUpdateCategory = option => {
    this.setState({
      category: option
    })
  }

  handleUpdateNeighborhood = option => {
    this.setState({
      neighborhood: option
    })
  }

  render() {
    const { searchTerm, category, neighborhood } = this.state
    console.log('searchterm', this.state.searchTerm)
    console.log('category', this.state.category)
    console.log('neighborhood', this.state.neighborhood)
    return (
      <section className="searchbar">
          <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
            <label className="search-label" htmlFor="search"></label>
            <input 
              className="search-input" 
              id="search" 
              type="text" 
              placeholder="Search"
              value={this.props.searchTerm}
              onChange={e => this.handleUpdateSearch(e.target.value)}/>
            <button type="submit" className="search-btn">
              <FontAwesomeIcon icon="search"/>
            </button>
            <fieldset className="filters">
              <div className="filter-left">
                <label className="form-label" htmlFor="category">Category</label>
                <div className="select-wrapper">
                  <select 
                    className="form-select" 
                    type="text" 
                    id="category"
                    value={this.props.category}
                    onChange={e => this.handleUpdateCategory(e.target.value)}>
                      <option value="all">all</option>
                      <option value="restaurants">restaurants</option>
                      <option value="attractions">attractions</option>
                      <option value="museums">museums</option>
                      <option value="parks">parks</option>
                      <option value="indoor play">indoor play</option>
                  </select>
                </div>
              </div>
              <div className="filter-right">
                <label className="form-label" htmlFor="neighborhood">Neighborhood</label>
                <select 
                  className="form-select" 
                  type="text" 
                  id="neighborhood"
                  value={this.props.neighborhood}
                  onChange={e => this.handleUpdateNeighborhood(e.target.value)}>
                    <option value="All Portland">All Portland</option>
                    <option value="N">N</option>
                    <option value="NE">NE</option>
                    <option value="NW">NW</option>
                    <option value="Downtown">Downtown</option>
                    <option value="SW">SW</option>
                    <option value="SE">SE</option>
                    <option value="Beaverton">Beaverton</option>
                    <option value="Vancouver">Vancouver</option>
                    <option value="Clackamas">Clackamas</option>
                    <option value="Milwaukie">Milwaukie</option>
                </select>
              </div>
            </fieldset>
          </form>
          {this.state.fireRedirect && (
            <Redirect to={{
              pathname: '/places',
              state: { searchTerm: searchTerm, category: category, neighborhood: neighborhood }
              }}
            />
          )}
        </section>
    )
  }
} 

export default SearchBar