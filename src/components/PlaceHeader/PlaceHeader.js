import React from 'react'
import { StarRating } from '../../components/StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import './PlaceHeader.css'

export default function PlaceHeader(props) {
  const place = props.place || {}
  const descriptorsList = place && place.descriptors && place.descriptors.length && place.descriptors.map((descriptor, index) =>
    <p className="place-descriptor" key={index}>{descriptor}</p>)
  
  return (
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
  )
}

PlaceHeader.defaultProps = {
  place: {}
}