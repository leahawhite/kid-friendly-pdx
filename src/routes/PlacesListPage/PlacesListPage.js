import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PlacesListItem from '../../components/PlacesListItem/PlacesListItem';
import Map from '../../components/MapContainer/Map';
import data from '../../data';
import './PlacesListPage.css';

export default class PlacesListPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
    }
  }

  componentDidMount() {
    // fetch will happen here
    this.setState(data);
  }

  renderPlaces() {
    const { places } = this.state
    const { searchTerm, category, neighborhood } = this.props.location.state
    console.log('places', places)
    console.log('searchTerm', searchTerm)
    const results = places.filter(place => (place.name.toLowerCase().includes(searchTerm.toLowerCase())
      || place.descriptors.includes(searchTerm.toLowerCase())) 
      && (category === place.category || category === 'all') && (neighborhood === place.neighborhood || neighborhood === 'All Portland'))
    console.log('results', results)
    
    return (
      results.length ?
        results.map(place => 
        <PlacesListItem key={place.id} place={place} /> ) 
        : <p>Sorry, your search returned no results. Please try again.</p>
    )
  }

  renderMap() {
    // repeats the same stuff as renderPlaces -- combine? But map is result array and place is result list.
    const { places } = this.state
    const { searchTerm, category, neighborhood } = this.props.location.state
    const results = places.filter(place => (place.name.toLowerCase().includes(searchTerm.toLowerCase())
      || place.descriptors.includes(searchTerm.toLowerCase())) 
      && (category === place.category || category === 'all') && (neighborhood === place.neighborhood || neighborhood === 'All Portland'))
    console.log('map', results)  
    return (
      results.length ?
      <section className="places-map">
        <Map places={results}/>
      </section> 
        : null
    )
  }
  
  /*handleUpdateSort(sort) {
      this.setState({
        sortResults: sort,
      })
  }*/
  
  render() {
   
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
                  <option value="rating">rating</option>
              </select>
            </form>
          </header>
          {this.renderPlaces()}
          {this.renderMap()}
        </section>
      </>
    )
  }
}