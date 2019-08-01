import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import Map from '../../components/Map/Map';
import Carousel from '../../components/Carousel/Carousel';
import Review from '../../components/Review/Review';
import Action from '../../components/Action/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarRating } from '../../components/StarRating/StarRating';
import Spinner from '../../components/Spinner/Spinner';
import { readableReviewCount } from '../../helpers/helpers';
import moment from 'moment'
import './PlacePage.css';

export default class PlacePage extends Component {
  static defaultProps = {
    location: { state: {} },
    match: { params: {} },
    images: [],
    place: {},
    reviews: [],
  }
  constructor(props) {
    super(props)
    this.state = {
      place: {},
      reviews: [],
      isLoading: true,
      error: null,
      fireRedirect: false,
    }
  }

  componentDidMount() {
    const { placeId } = this.props.match.params
    const baseUrl = 'http://localhost:8000'
    Promise.all([
      fetch(`${baseUrl}/places/${placeId}`),
      fetch(`${baseUrl}/places/${placeId}/reviews`)
    ])
      .then(([placeRes, reviewsRes]) => {
        if (!placeRes.ok)
          return placeRes.json().then(e => Promise.reject(e))
        if (!reviewsRes.ok)
          return reviewsRes.json().then(e => Promise.reject(e))
        return Promise.all([placeRes.json(), reviewsRes.json()])  
      })
      .then(([place, reviews]) => {
        this.setState({
          place: place,
          reviews: reviews[0],
          isLoading: false,
          error: false
        })
        console.log('fetch place', place)
        console.log('fetch reviews', reviews)
      })
      .catch(error => {
        console.error({error});
      })
  }

  renderReviews() {
    const { reviews, users } = this.state
    return (
      <ul className="places-item-reviews">
        {reviews.length ? 
          reviews.map(review =>
            <Review key={review.id} review={review} /*users={users}*/ />)
          : null}
      </ul>
    )
  }
  
  renderImages() {
    const { reviews, place } = this.state
    const placeImages = place.images
    const reviewsImages = reviews.map(review => review.images)
    if (!placeImages.length && !reviewsImages.length) {
      return null;
    } else if (placeImages.length && !reviewsImages.length) {
      return placeImages;
    } else {
      return [...placeImages, ...reviewsImages[0]];
    }
  }

  getStdTime(hours) {
    return moment(hours, 'hh:mm a').format('hh:mm a')
  }

  render() {
    // need to fix spinner alignment
    const { isLoading, place } = this.state
    if (isLoading) {
      return <div className="spinner-container"><Spinner /></div>
    } else {
    // is this allowed? push to new array instead?
    const placeArray = [ place ]
    const descriptorsList = place.descriptors.length && place.descriptors.map((descriptor, index) =>
      <p className="place-descriptor" key={index}>{descriptor}</p>)
    const hoursArr = place.hours.map((item, index) =>
      <table className="place-hours-table" key={index}>
        <tbody>
          <tr className="place-hours-table-row">
            <th className="place-hours-table-column-left">{item.dayOfWeek}{': '}</th>
            <td className="place-hours-table-column-right">{this.getStdTime(item.opens)}{' - '}{this.getStdTime(item.closes)}</td>
          </tr>
        </tbody>
      </table>  
    );
      return (
        <>
        <SearchBar />
        <div className="place-page">
          <section className="place-images-container">
            <Carousel images={this.renderImages()} imagesClass="image-item" />
          </section>
          <section className="place-header">
            <div className="place-header-basicinfo">
              <h2 className="place-header-name">{place.name}</h2>
              <div className="place-header-rating">
                <div className="star-rating">
                  <StarRating rating={place.average_review_rating} />
                </div>
                <span>{readableReviewCount(place.number_of_reviews)}</span>
              </div>
              <div className="place-header-tags">{descriptorsList}</div>
            </div> 
          </section>
          <section className="place-actions">
            <Action name="phone" link={`tel:+1-${place.phone}`} icon="phone" text="Call" />
            <Action 
              name="directions" 
              link={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(`${place.address1},${place.city},${place.state} ${place.zipcode}`)}`} 
              icon="directions"
              text="Directions"
            />
            <Action name="website" link={place.website} icon="globe" text="Website" />
            <div className="place-write-review">
              <Link to={{
                  pathname: `/places/${place.id}/reviews`,
                  state: { place: place }
                  }}>
                  <FontAwesomeIcon icon="star" size="lg"/> 
                  <p>Review</p>
              </Link>
            </div>
          </section>
          <section className="place-addl-info">
            <div className="place-map">
              <div className="place-map-icon">
                <FontAwesomeIcon icon="map-marker-alt" size="lg" />
              </div>
              <div className="place-map-content">
                <div className="place-address">
                  <p>{place.address1}{place.address2}<br/>{place.city}{', '}{place.state}{' '}{place.zipcode}</p>
                </div>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(`${place.address1},${place.city},${place.state} ${place.zipcode}`)}`}>
                  <div className="place-map-container">   
                    <Map 
                      places={placeArray} 
                      zoom={14} 
                      center={{
                        lat: place.latitude,
                        lng: place.longitude
                      }}
                      infoClass="infowindow-hidden"
                    />
                  </div>
                </a>
              </div>
            </div>
            <div className="place-hours">
              <div className="place-hours-icon">
                <FontAwesomeIcon icon="clock" size="lg" />
              </div>
              <div className="place-hours-content">
                {hoursArr}
              </div>
            </div>
            <PlaceFeatures place={place} />
            <div className="place-reviews">
              <h2 className="place-reviews-header">Reviews</h2>
              <div className="place-reviews-content">
                {this.renderReviews()}
              </div>
            </div>
            <div className="write-review-btn-container">
              <button className="write-review-btn">
                <Link to={{
                  pathname: `/places/${place.id}/reviews`,
                  state: { place: place }
                }}>
                  <FontAwesomeIcon icon="pen" size="sm" />
                  <span>Write a review</span>
                </Link>
              </button>
            </div>
          </section>
        </div>
        </>
      )
    }
  }
}

function PlaceFeatures({place}) {
  const filteredFeatures = Object.keys(place.features)
  .filter(feature => place.features[feature] === true);
  return (
    <div className="place-features">
      <div className="place-features-icon">
        <FontAwesomeIcon icon="child" size="lg"/>
      </div>
      <div className="place-features-content">
        <h2>Kid-friendly features</h2>
        <div className="features-list">
          {filteredFeatures.map((feature, index) =>
            <p className="place-feature" key={index}>{feature}</p>
          )}
        </div>
      </div>
    </div>
  )
}
