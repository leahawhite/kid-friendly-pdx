import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import Map from '../../components/Map/Map';
import CarouselLB from '../../components/CarouselLB/CarouselLB';
import Review from '../../components/Review/Review';
import Action from '../../components/Action/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarRating } from '../../components/StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import moment from 'moment'
import data from '../../data';
import './PlacePage.css';

export default class PlacePage extends Component {
  static defaultProps = {
    location: { state: {} },
    match: { params: {} },
    images: [],
    places: [],
    reviews: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  componentDidMount() {
    // get place info and reviews
    this.setState(data);
  }

  renderReviews() {
    const { reviews, users } = this.state.data
    const { placeId } = this.props.match.params
    const reviewsList = reviews.filter(review => review.place_id.toString() === placeId)
    
    return (
      <ul className="places-item-reviews">
        {reviews.length ? 
          reviewsList.map(review =>
            <Review key={review.id} review={review} users={users} />)
          : null}
      </ul>
    )
  }
  
  renderImages() {
    const { place } = this.props.location.state
    const placeImages = place.images
    const { reviews } = this.state.data
    const { placeId } = this.props.match.params
    const reviewsList = reviews.length ? reviews.filter(review => review.place_id.toString() === placeId) : null
    const reviewsImagesArrays = reviewsList.map(review => review.images)
    if (!placeImages.length && !reviewsImagesArrays.length) {
      return null;
    } else if (placeImages.length && !reviewsImagesArrays.length) {
      return placeImages;
    } else {
      return [...placeImages, ...reviewsImagesArrays[0]];
    }
  }

  getStdTime(hours) {
    return moment(hours, 'hh:mm a').format('hh:mm a')
  }

  render() {
    const { place } = this.props.location.state
    const placeArray = [ this.props.location.state.place ]
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
            <CarouselLB images={this.renderImages()} imagesClass='image-item'/>
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
                      center={place.coordinates}
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
