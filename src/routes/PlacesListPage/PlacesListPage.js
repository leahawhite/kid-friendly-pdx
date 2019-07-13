import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import PlacesListItem from '../../components/PlacesListItem/PlacesListItem';
import Map from '../../components/Map/Map';
import data from '../../data';
import './PlacesListPage.css';
import haversine from 'haversine'
// import pinwheel from '../../images/pinwheel.svg';

export default class PlacesListPage extends Component {
  static defaultProps = {
    location: { state: {} },
    places: [],
  }
  
  constructor(props) {
    super(props)
    this.select = React.createRef()
    this.state = {
      // isLoading: true,
      places: [],
      results: [],
      sort: '',
    }
  }

  componentDidMount() {
    // fetch will happen here -- add loader
    this.setState(data);
  }

  sortResults = results => {
    const { sort } = this.state
    if (sort) {
      if (sort === 'rating') {
        results = results.sort((a,b) => (a.average_review_rating < b.average_review_rating) ? 1 : ((b.average_review_rating < a.average_review_rating) ? -1 : 0));
      } else if (sort === 'number of reviews') {
        results = results.sort((a,b) => (a.number_of_reviews < b.number_of_reviews) ? 1 : ((b.number_of_reviews < a.number_of_reviews) ? -1 : 0));
        console.log('sorted by review', results)
      } else if (sort === 'distance') {
        results = this.sortByDistance(results)
        console.log('sortedbyDistance', this.sortByDistance(results))
      }
    }
    return results
  }

  sortByDistance = results => {
    console.log('sortbyDistance results', results)
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        console.log(`userLat: ${ userLat } | UserLng: ${ userLng }`);
        const resultsDistances = results.map(result => {
          // Haversine formula
          const start = {
            latitude: userLat,
            longitude: userLng
          }
          const end = {
            latitude: result.coordinates.lat,
            longitude: result.coordinates.lng
          }
          const distance = haversine(start, end)
          return Object.assign(result, { distance });
        });
        const sortedDistances = resultsDistances.sort((a, b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0)); 
        console.log('sortedDistances', sortedDistances)
        return sortedDistances; 
      });
    } 
  }
  
  renderPlaces() {
    const { places } = this.state
    const { searchTerm, category, neighborhood } = this.props.location.state
    const results = places.filter(place => (place.name.toLowerCase().includes(searchTerm.toLowerCase())
      || place.descriptors.includes(searchTerm.toLowerCase()) || place.category.includes(searchTerm.toLowerCase())) 
      && (place.category.includes(category) || category === 'all') 
      && (neighborhood === place.neighborhood || neighborhood === 'All Portland'))
    const placeResults = results.length 
      ? this.sortResults(results).map(place => 
      <PlacesListItem key={place.id} place={place} />)
      : <p>Sorry, your search returned no results. Please try again.</p>
    const mapResults = results.length 
      ? <section className="places-map">
          <Map places={results} zoom={11} center={{lat: 45.5155, lng: -122.6793}} infoClass="infowindow" />
        </section> 
      : null
    
    return (
      <>
        {placeResults}
        {mapResults}
      </>
    )
  }

  handleUpdateSort = e => {
    this.setState({
      sort: e.target.value
    })
  }
  
  render() {
    // const { isLoading } = this.state
    // const showLoading = () => <div className="divLoader">{pinwheel}</div>

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