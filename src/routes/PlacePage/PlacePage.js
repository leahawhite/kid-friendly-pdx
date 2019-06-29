import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import MapContainer from '../../components/MapContainer/MapContainer';
// import CarouselTrial from '../../components/Carousel/CarouselTrial';
import CarouselLB from '../../components/CarouselLB/CarouselLB';
// import CarouselMulti from '../../components/Carousel/CarouselMulti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StarRating } from '../../components/StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import moment from 'moment'
import data from '../../data';
import './PlacePage.css';

export default class PlacePage extends Component {
  static defaultProps = {
    match: { params: {} },
    images: [],
    places: [],
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
    // cheated here with images -- something is broken in image org; couldn't map images by review
    const { reviews, users, places } = this.state.data
    const { placeId } = this.props.match.params
    // also filter for reviews that have text? why show reviews with just star rating? make text req?
    const reviewsList = reviews.filter(review => review.place_id.toString() === placeId)
    const place = places.filter(place => place.id.toString() === placeId)
    console.log('place', place)
    return (
      <ul className="places-item-reviews">
        {reviewsList.map(review => {
          const userId = review.user_id
          const username = users.find(user => user.id === userId).display_name
          return (
            <li className="places-item-review" key={review.id}>
              <p className="username">{username}</p>
              <div className="places-item-review-star-rating">
                <div className="star-rating">
                <StarRating rating={review.star_rating} />
                </div>
                <span>{moment(review.date_created).format('MM/DD/YYYY')}</span>
              </div>
              <p className="review-text">{review.text}</p>
              <div className="review-image-container">
                {review.images.length ? review.images.map(image =>   
                    <img className="review-image" key={image.id} src={image.src} alt={image.alt}/>)
                    : null }  
              </div>
            </li>
        )})}
      </ul>
    )
  }

  getStdTime(hours) {
    return moment(hours, 'hh:mm a').format('hh:mm a')
  }

  render() {
    const { place } = this.props.location.state
    const descriptorsList = place.descriptors.map((descriptor, index) =>
      <p className="place-descriptor" key={index}>{descriptor}</p>
      )
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
    const placeImages = place.images.length
      ? <CarouselLB images={place.images}/>
      : <p>No photos available.</p>

    return (
      <>
        <SearchBar />
        <div className="place-page">
          <section className="place-images-container">
            {placeImages}
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
            <div className="place-phone">
              <a href={`tel:+1-${place.phone}`}>
                <FontAwesomeIcon icon="phone" size="lg" />
              </a>
              <p>Call</p>
            </div>
            <div className="place-directions">
              {/* need to make this link to a new Google Maps Directions route? */}
              <a href={place.address}>
                <FontAwesomeIcon icon="directions" size="lg"/>
              </a>
              <p>Directions</p>    
            </div>
            <div className="place-website">
              <a href={place.website}>
                <FontAwesomeIcon icon="globe" size="lg"/>
              </a>
              <p>Website</p>
            </div>
            <div className="place-write-review">
              <Link to={{
                  pathname: `/places/${place.id}/reviews`,
                  state: { place: place }
                }}>
                  <FontAwesomeIcon icon="star" size="lg"/> 
              </Link>
              <p>Review</p>
            </div>   
          </section>
          <section className="place-addl-info">
            <div className="place-map">
              <div className="place-map-icon">
                <FontAwesomeIcon icon="map-marker-alt" size="lg" />
              </div>
              <div className="place-map-content">
                <div className="place-address">
                  <p>{place.address}</p>
                </div>
                <div className="place-map-container">  
                  <MapContainer name={place.name} address={place.address}/>
                </div>
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


