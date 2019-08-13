import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Consumer } from '../../contexts/SearchContext'
// import Spinner from '../../components/Spinner/Spinner';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  showLoader = () => {
    const { isLoading } = this.props
    if (isLoading) {
      return <FontAwesomeIcon icon="spinner" spin/>
    } else {
      return <FontAwesomeIcon icon="search"/>
    } 
  }

  render() {
    
    return (
      <Consumer>
        {context => (
      <section className="searchbar">
        <form className="search-form" onSubmit={context.handleSubmit}>
          <label className="search-label" htmlFor="search"></label>
          <input 
            className="search-input" 
            id="search" 
            type="text" 
            placeholder="Search"
            value={context.searchTerm}
            onChange={context.handleUpdateSearch}/>
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
                  value={context.category}
                  onChange={context.handleUpdateCategory}>
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
                value={context.neighborhood}
                onChange={context.handleUpdateNeighborhood}>
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
        {context.fireRedirect &&
          <Redirect to={{
            pathname: '/places',
            // state: { searchTerm: context.searchTerm, category: context.category, neighborhood: context.neighborhood, places: context.places }
            }}
          />
        }
      </section>
        )}
      </Consumer>
    )
  }
} 

export default SearchBar