import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import MapContainer from '../../components/MapContainer/MapContainer';
import Carousel from '../../components/Carousel/Carousel';
import CarouselLB from '../../components/CarouselLB/CarouselLB';
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
    const reviewsList = reviews.filter(review => review.place_id === placeId)
    return (
      <ul className="places-item-reviews">
        {reviewsList.map(review => {
          const userId = review.user_id
          const user = users.find(user => user.id.toString() === userId)
          const username = user.display_name
          return (
            <li className="places-item-review" key={review.id}>
              <p className="username">{username}</p>
              <div>
                <StarRating rating={review.star_rating} />
                <span>{moment(review.date_created).format('MM/DD/YYYY')}</span>
              </div>
              <p>{review.text}</p>
              {/* write function for image mapping here*/}
            </li>
          )
        })}
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
    const hoursArr = place.hours2.map((item, index) =>
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
      ? <Carousel images={place.images} /> 
      : <p>No images have been posted yet.</p> 
    
    return (
      <>
        <SearchBar />
        <div className="image-container">
          {placeImages}
        </div>
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
          <div className="place-hours">
            <div className="place-hours-icon">
              <FontAwesomeIcon icon="clock" size="lg" />
            </div>
            <div className="place-hours-content">
              <h2>Hours</h2>
              {hoursArr}
            </div>
          </div>
          <div className="place-map">
            <div className="place-map-icon">
              <FontAwesomeIcon icon="map-marker-alt" size="lg" />
            </div>
            <div className="place-address">
              <p>{place.address}</p>
            </div>
            <div>  
              <MapContainer name={place.name} address={place.address}/>
            </div>
          </div>
          <PlaceFeatures place={place} />
          <div className="place-reviews">
            <h2>Reviews</h2>
            {this.renderReviews()}
          </div>
          <button className="review-btn">
              <Link to={{
                pathname: `/places/${place.id}/reviews`,
                state: { place: place }
              }}>
                Review this place
              </Link>
            </button>
        </section>
      </>
    )
  }
}

function PlaceFeatures({place}) {
  const filteredFeatures = Object.keys(place.features)
  .filter(feature => place.features[feature] === true);
    
  return (
    <div className="place-features">
        <h2>Kid-friendly features</h2>
        <div className="features-list">
          {filteredFeatures.map((feature, index) =>
            <p className="place-feature" key={index}>{feature}</p>
          )}
      </div>
    </div>
  )
}


