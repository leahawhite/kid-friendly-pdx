import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Select from 'react-select'
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
    
      // const options = [
      //   {label: 'restaurant', value: 'restaurant'},
      //   {label: 'attraction', value: 'attraction'},
      //   {label: 'museum', value: 'museum'},
      //   {label: 'park', value: 'park'},
      //   {label: 'indoor play', value: 'indoor play'},
      //   {label: 'toy store', value: 'toy store'}
      // ]
      // const customStyles = {
      //   option: (provided, state) => ({
      //     ...provided,
      //     border: '3px solid blue', 
      //     padding: 5,
      //   }),
      //   control: () => ({
      //     width: 200,
      //   }),
      //   singleValue: (provided, state) => {
      //     const opacity = state.isDisabled ? 0.5 : 1;
      //     const transition = 'opacity 300ms';
      
      //     return { ...provided, opacity, transition };
      //   }
      // }
     
      
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
          <div className="filters">
            <label className="form-label" htmlFor="category"></label>
            {/* <Select 
              // className="form-select category" 
              id="category" 
              value={category} 
              aria-label="category"
              placeholder="Category" 
              options={options} 
              classNamePrefix="category"
              onChange={e => this.props.handleUpdateCategory(e.value)} 
            /> */}
            <select 
                className="form-select category" 
                type="text" 
                id="category"
                value={category}
                aria-label="category"
                onChange={handleUpdateCategory}>
                  <option value="">Category</option>
                  <option value="restaurant">restaurant</option>
                  <option value="attraction">attraction</option>
                  <option value="museum">museum</option>
                  <option value="park">park</option>
                  <option value="indoor play">indoor play</option>
                  <option value="toy store">toy store</option>
              </select>
            <label className="form-label" htmlFor="neighborhood"></label>
            <select 
              className="form-select neighborhood" 
              type="text" 
              id="neighborhood"
              value={neighborhood}
              aria-label="neighborhood"
              onChange={handleUpdateNeighborhood}>
                <option value="">Neighborhood</option>
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
        </form>
      </section>
    )
  }
} 

export default SearchBar