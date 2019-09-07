import React, { Component } from 'react';
import Carousel from '../../components/Carousel/Carousel';
import PlaceHeader from '../../components/PlaceHeader/PlaceHeader';
import PlaceActions from '../../components/PlaceActions/PlaceActions';
import PlaceMap from '../../components/PlaceMap/PlaceMap';
import PlaceHours from '../../components/PlaceHours/PlaceHours';
import PlaceFeatures from '../../components/PlaceFeatures/PlaceFeatures';
import PlaceReviews from '../../components/PlaceReviews/PlaceReviews';
import Spinner from '../../components/Spinner/Spinner';
import PlacesApiService from '../../services/places-api-service';
import './PlacePage.css';

export default class PlacePage extends Component {
  static defaultProps = {
    location: { state: {} },
    match: { params: {} },
    place: {},
    reviews: [],
  }
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      reviews: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    const { placeId } = this.props.match.params
    if (!this.props.location.state) {
      this.setState({isLoading: true})
      Promise.all([PlacesApiService.getById(placeId), PlacesApiService.getReviewsForPlace(placeId)])
      .then(([place, reviews]) => {
        this.setState({
          place: place,
          reviews: reviews,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })
    } else {
      PlacesApiService.getReviewsForPlace(placeId)
      .then(reviews => {
        this.setState({
          reviews,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })
    }
  }

  componentWillUnmount = () => {
    
  }
  
  render() {
    const { state } = this.props.location
    const place = state ? state.place : this.state.place
    const placeImages = place && place.images
    const { reviews } = this.state
    const { isLoading } = this.state
    if (isLoading) 
      return <Spinner />
      return (
        <div className="place-page">
          <section className="place-images-container">
            <Carousel images={placeImages} imagesClass="image-item" />
          </section>
          <PlaceHeader place={place} />
          <PlaceActions place={place} reviews={reviews} />
          <section className="place-addl-info">
            <PlaceMap place={place} />
            <PlaceHours place={place} />
            <PlaceFeatures place={place} />
            <PlaceReviews place={place} reviews={reviews} />
          </section>
        </div>
      )
  }
}


