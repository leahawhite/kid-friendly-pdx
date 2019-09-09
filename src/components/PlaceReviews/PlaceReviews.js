import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Review from '../../components/Review/Review'
import './PlaceReviews.css'

export default class PlaceReviews extends Component {
  render() {
  const { place, reviews } = this.props
    
    return (
      <>
        <div className="place-reviews">
          <h2 className="place-reviews-header">Reviews</h2>
          <div className="place-reviews-content">
            <ul className="places-item-reviews">
              {reviews && reviews.length ? 
                reviews.map(review =>
                  <Review key={review.id} review={review} place={place} />)
                : null}
            </ul>
          </div>
        </div>
        <div className="write-review-btn-container">
          <button className="write-review-btn" aria-label="write-review">
            <Link to={{
              pathname: `/places/${place.id}/reviews`,
              state: { place: place }
            }}>
              <FontAwesomeIcon icon="pen" size="sm" />
              <span>Write a review</span>
            </Link>
          </button>
      </div>
    </>
    )
  }
}

PlaceReviews.defaultProps = {
  place: {},
  reviews: []
}

