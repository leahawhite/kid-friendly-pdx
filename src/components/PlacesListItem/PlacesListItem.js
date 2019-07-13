import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StarRating } from '../StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import './PlacesListItem.css';

export default class PlacesListItem extends Component {
  static defaultProps = { place: {} }
  
  render() {
    const { place } = this.props
    const descriptorsList = place.descriptors.map((descriptor, index) =>
      <p className="place-descriptor" key={index}>{descriptor}</p>
    )
    
    return (
      <div className="place-item">
        <div className="place-image-container">
          <Link to={{
                  pathname: `/places/${place.id}`,
                  state: { place: place }
                }}>
            {place.images.length ? <img className="place-image" src={place.images[0].src} alt={place.images[0].title}></img> 
            : null}
          </Link>
        </div>
        <div className="place-info">
          <h3 className="place-name">
            <Link to={{
                pathname: `/places/${place.id}`,
                state: { place: place }
              }}>
              {place.name}
            </Link>
          </h3>
          <div className="place-info-reviews">
            <div className="star-rating">
              <StarRating rating={place.average_review_rating} />
            </div>
            <span>{readableReviewCount(place.number_of_reviews)}</span>
          </div>
          {descriptorsList}
        </div>
      </div>
    )
  }
}
