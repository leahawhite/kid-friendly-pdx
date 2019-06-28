import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './ReviewPage.css';

export default class ReviewPage extends Component {
  render() {
    const { place } = this.props.location.state
    return (
      <>
        <h2 className="review-form-header">Write a Review of{' '}
          <Link to={{
                    pathname: `/places/${place.id}`,
                    state: { place: place }
                    }}>
            {place.name}
          </Link>
        </h2>
        <ReviewForm place={place} />
      </>
    )
  }
}