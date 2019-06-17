import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import PlacesListItem from '../../components/PlacesListItem/PlacesListItem';
import SearchContext from '../../contexts/SearchContext';
import data from '../../data';
import './PlacesListPage.css';

export default class PlacesListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      users: [],
      reviews: [],
    }
  }

  static contextType = SearchContext

  componentDidMount() {
    // fetch will happen here
    this.setState(data);
    }

  renderPlaces() {
    const { places = [], searchTerm, category, neighborhood } = this.context
    console.log('places', places)
    console.log('searchTerm', searchTerm)
    let results
    if(searchTerm) {
      results = places.filter(place => place.name.toLowerCase().includes(searchTerm.toLowerCase())
      || place.descriptors.includes(searchTerm.toLowerCase()))
    } else {
      results = places
    }
    console.log('results', results)
    return (
      results.map(place => 
        <PlacesListItem key={place.id} place={place} />
      )
    )
  }
  
  /*handleUpdateSort(sort) {
      this.setState({
        sortResults: sort,
      })
  }*/
  
  render() {
    console.log('this.props')
    
    return (
      <>
        <SearchBar />
        <section className="places-list">
          <header className="places-header">
            <h2>Results</h2>
            <form className="sort-results-form">
              <label className="sort-results" htmlFor="sort-results">Sort by:</label>
              <select 
                className="sort-select" 
                type="text" 
                id="sort-results" 
                /*value=""
                /* onChange={e => this.handleUpdateSort(e.target.value)}*/>
                  <option value="distance">distance</option>
                  <option value="rating">rating</option>*/
              </select>
            </form>
          </header>
          {this.renderPlaces()}
        </section>
      </>
    )
  }
}