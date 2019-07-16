import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Spinner from '../../components/Spinner/Spinner';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      category: 'all',
      neighborhood: 'All Portland',
      places: [],
      error: null,
      fireRedirect: false,
    }
  }

  getPlaces = () => {
    const { searchTerm, category, neighborhood } = this.state
    const baseUrl = 'http://localhost:8000/places'
    const params = []
    if (searchTerm) {
      params.push(`searchTerm=${encodeURI(searchTerm)}`)
    }
    if (category) {
      params.push(`category=${encodeURI(category)}`)
    }
    if (neighborhood) {
      params.push(`neighborhood=${encodeURI(neighborhood)}`)
    }
    const query = params.join('&')
    const url = `${baseUrl}?${query}`
    
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          places: data,
          isLoading: false,
          error: null,
          fireRedirect: true,
        })
      })
      .catch(err => {
        // this makes a duplicate of the message I have in renderPlaces
        this.setState({
          error: 'Sorry, could not retrieve any results at this time.'
        })
      })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true })
    this.getPlaces()
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
  
  showLoader = () => {
    const { isLoading } = this.state
    if (isLoading) {
      return <FontAwesomeIcon icon="spinner" spin/>
    } else {
      return <FontAwesomeIcon icon="search"/>
    } 
  }

  render() {
    const { searchTerm, category, neighborhood, places, fireRedirect } = this.state
    
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
            {this.showLoader()}
          </button>
          <fieldset className="filters">
            <div className="filter-category">
              <label className="form-label" htmlFor="category">Category:</label>
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
                    <option value="toy store">toy stores</option>
                </select>
              </div>
            <div className="filter-neighborhood">
              <label className="form-label" htmlFor="neighborhood">Neighborhood:</label>
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
        {fireRedirect &&
          <Redirect to={{
            pathname: '/places',
            state: { searchTerm: searchTerm, category: category, neighborhood: neighborhood, places: places }
            }}
          />
        }
      </section>
    )
  }
  
} 

export default SearchBar