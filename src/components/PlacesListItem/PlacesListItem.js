import React from 'react'
import { Link } from 'react-router-dom'
import { StarRating } from '../StarRating/StarRating'
import { readableReviewCount } from '../../helpers/helpers'
import './PlacesListItem.css'

export default function PlacesListItem(props) {
  const place = props.place
  const descriptorsList = place.descriptors && place.descriptors.map((descriptor, index) =>
    <p className="place-descriptor" key={index}>{descriptor}</p>
  )
  
  return (
    <Link to={{
      pathname: `/places/${place.id}`,
      state: { place: place }
    }}>
      <div className="place-item">
        <div className="place-image-container">
          {place.images && place.images.length ? <img className="place-image" src={place.images[0].src} alt={place.images[0].title}></img> 
          : null}
        </div>
        <div className="place-info">
            <h3 className="place-name">
            {place.name}
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
    </Link>
  )
}

PlacesListItem.defaultProps = { place: {} }
