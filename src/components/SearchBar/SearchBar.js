import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './SearchBar.css'

class SearchBar extends Component {
  
  render() {
    const { 
      searchTerm, 
      category, 
      neighborhood, 
      handleUpdateSearch, 
      handleUpdateCategory, 
      handleUpdateNeighborhood, 
      handleSubmit } = this.props
    return (
      <section className="searchbar">
        <form className="search-form" onSubmit={handleSubmit}>
          <label className="search-label" htmlFor="search"></label>
          <input 
            className="search-input" 
            id="search" 
            type="text" 
            placeholder="Search:  pizza, cafe, park..."
            value={searchTerm}
            aria-label="search"
            onChange={handleUpdateSearch}/>
          <button type="submit" className="search-btn" aria-label="search">
            <FontAwesomeIcon icon="search"/>
          </button>
          <fieldset className="filters">
            <div className="filter-category">
              <label className="form-label" htmlFor="category">Category:</label>
              <select 
                  className="form-select" 
                  type="text" 
                  id="category"
                  value={category}
                  aria-label="category"
                  onChange={handleUpdateCategory}>
                    <option value=""></option>
                    <option value="restaurant">restaurant</option>
                    <option value="attraction">attraction</option>
                    <option value="museum">museum</option>
                    <option value="park">park</option>
                    <option value="indoor play">indoor play</option>
                    <option value="toy store">toy store</option>
                </select>
              </div>
            <div className="filter-neighborhood">
              <label className="form-label" htmlFor="neighborhood">Neighborhood:</label>
              <select 
                className="form-select" 
                type="text" 
                id="neighborhood"
                value={neighborhood}
                aria-label="neighborhood"
                onChange={handleUpdateNeighborhood}>
                  <option value=""></option>
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
      </section>
    )
  }
} 

export default SearchBar