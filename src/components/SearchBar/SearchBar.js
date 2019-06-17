import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';
import SearchContext from '../../contexts/SearchContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }
  }
  static contextType = SearchContext

  render() {
    const { searchTerm, category, neighborhood, handleSubmit, handleSearchChange, handleCategoryChange, handleNeighborhoodChange, fireRedirect } = this.props
    return (
      <section className="searchbar">
          <form className="search-form" onSubmit={handleSubmit}>
            <label className="search-label" htmlFor="search">Search</label>
            <input 
              className="search-input" 
              id="search" 
              type="text" 
              placeholder="Search term"
              value={searchTerm}
              onChange={e => handleSearchChange(e.target.value)}/>
            <button type="submit" className="search-btn">
              <FontAwesomeIcon icon={faSearch}/>
            </button>
            <label className="form-label" htmlFor="category">Category</label>
            <select 
              className="form-select" 
              type="text" 
              id="category"
              value={category}
              onChange={e => handleCategoryChange(e.target.value)}>
                <option value="all">all</option>
                <option value="restaurants">restaurants</option>
                <option value="attractions">attractions</option>
                <option value="museums">museums</option>
                <option value="parks">parks</option>
                <option value="indoor play">indoor play</option>
            </select>
            <label className="form-label" htmlFor="neighborhood">Neighborhood</label>
            <select 
              className="form-select" 
              type="text" 
              id="neighborhood"
              value={neighborhood}
              onChange={e => handleNeighborhoodChange(e.target.value)}>
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
          </form>
          {fireRedirect && (
            <Redirect to={{
              pathname: '/places',
              state: { searchTerm, category, neighborhood }
            }}
            />
            )}
        </section>
    )
  }
} 

export default SearchBar