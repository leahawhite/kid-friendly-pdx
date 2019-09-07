import React, { Component } from 'react';
import PlacesListItem from '../../components/PlacesListItem/PlacesListItem';
import Map from '../../components/Map/Map';
import Spinner from '../../components/Spinner/Spinner';
import SearchBar from '../../components/SearchBar/SearchBar';
import './PlacesListPage.css';
import haversine from 'haversine';

export default class PlacesListPage extends Component {
  static defaultProps = {
    location: { state: {} },
    searchTerm: "",
    category: "",
    neighborhood: ""
  }
  
  constructor(props) {
    super(props)
    this.state = {
      results: [],
      sort: 'rating',
    }
  }

  getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          userLat: position.coords.latitude,
          userLng: position.coords.longitude
        })
      },
        (error) => console.log(error.message),
      )
    }  
  }

  sortResults = results => {
    const { sort } = this.state
    if (sort) {
      if (sort === 'rating') {
        results = results.sort((a,b) => (a.average_review_rating < b.average_review_rating) ? 1 : ((b.average_review_rating < a.average_review_rating) ? -1 : 0));
      } else if (sort === 'number of reviews') {
        results = results.sort((a,b) => (a.number_of_reviews < b.number_of_reviews) ? 1 : ((b.number_of_reviews < a.number_of_reviews) ? -1 : 0));
      } else if (sort === 'distance') {
        results = this.sortByDistance(results)
      }
    }
    return results
  }

  sortByDistance = results => {
    const resultsDistances = results.map(result => {
      // Haversine formula
      const start = {
        latitude: this.state.userLat,
        longitude: this.state.userLng
      }
      const end = {
        latitude: result.latitude,
        longitude: result.longitude
      }
      const distance = haversine(start, end)
      return Object.assign(result, { distance });
    });
    const sortedDistances = resultsDistances.sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0)); 
    return sortedDistances; 
  }
    
  renderPlaces() {
    const { isLoading, places } = this.props
    const placeResults = places && places.length 
      ? this.sortResults(places).map(place => 
      <PlacesListItem key={place.id} place={place} />)
      : <p>Sorry, your search returned no results. Please try again.</p>
    const mapResults = places && places.length 
      ? <section className="places-map">
          <Map places={places} zoom={11} center={{lat: 45.5155, lng: -122.6793}} infoClass="infowindow" />
        </section> 
      : null
    if (isLoading)
      return <Spinner />
    return (
      <>
        <div className="Places_error">{this.state.error}</div>
        {placeResults}
        {mapResults}
      </>
    )
  }

  handleUpdateSort = e => {
    this.getPosition()
    this.setState({
      sort: e.target.value
    })
  }

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
      <>
      <SearchBar 
        searchTerm={searchTerm}
        category={category}
        neighborhood={neighborhood}
        handleUpdateSearch={handleUpdateSearch}
        handleUpdateCategory={handleUpdateCategory}
        handleUpdateNeighborhood={handleUpdateNeighborhood}
        handleSubmit={handleSubmit}/>
      <section className="places-list">
        <header className="places-header">
          <h2>Results</h2>
          <form className="sort-results-form">
            <label className="sort-results" htmlFor="sort-results">Sort by:</label>
            <select 
              className="sort-select" 
              type="text" 
              id="sort-results"
              name="sort" 
              value={this.state.value}
              onChange={e => this.handleUpdateSort(e)}>
                <option name="sort" value="rating">rating</option>
                <option name="sort" value="number of reviews">number of reviews</option>
                <option name="sort" value="distance">distance</option>
            </select>
          </form>
        </header>
        {this.renderPlaces()}
      </section>
      </>
    )
  }
}