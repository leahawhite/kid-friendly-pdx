import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatingComponent from 'react-star-rating-component'
import ValidationError from '../ValidationError'
import data from '../../data';
import './ReviewForm.css';


export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: data.reviews,
      rating: 0,
      text: "",
      ratingValid: false,
      validationMessages: {
        rating: "",
      },
      fireRedirect: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { place } = this.props
    const newId = this.state.reviews.slice(-1)[0].id + 1
    const newReview = {
      id: newId,
      star_rating: this.state.rating,
      text: e.target.text.value,
      date_created: new Date(),
      place_id: place.id,
      // how to capture userId here through auth?
      // user_id: "2",
    }

    
    this.setState({
      reviews: { ...this.state.reviews, ...newReview },
      fireRedirect: true,
    })
  }

  updateRating = (rating) => {
    this.setState({rating}, () => {this.validateRating(rating)})
  }

  validateRating(fieldValue) {
    const fieldErrors = {...this.state.validationMessages}
    let hasError = false;
    if(fieldValue.length === 0) {
      fieldErrors.rating = 'Star rating is required.';
      hasError = true;
    } else {
      if(fieldValue.length < 1 || fieldValue.length > 5) {
        fieldErrors.rating = 'Please enter a star rating between 1 and 5';
        hasError = true; 
      } else {
        fieldErrors.rating = Number(fieldValue);
        hasError = false;
      }
    }
    this.setState({
      validationMessages: fieldErrors,
      rating: Number(fieldValue),
      ratingValid: !hasError
    }, this.formValid);
  }

  formValid() {
    this.setState({
      formValid: this.state.ratingValid
    });
  }
  
  render() {
    const { place } = this.props
    const { rating } = this.state
    const starStyle = {
      display: 'inline',
      fontSize: '34px',
      padding: '0 0 0 10px',
      margin: '-1px 0 0 0',
      verticalAlign: 'middle',
      height: '100%'
    }
    return (
      <>
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="star-rating-select">
          <label htmlFor="rating">Your rating: </label>
          <div className="star-container" style={starStyle}>
            <StarRatingComponent 
              name="rating"
              starCount={5}
              value={rating}
              onStarClick={this.updateRating}/>
            <ValidationError hasError={!this.state.ratingValid} message={this.state.validationMessages.rating}/>
          </div>
        </div>
        <div className="text">
          <textarea placeholder="Share your experience with others. How kid-friendly is this place?" name="text"></textarea>
        </div>
        <div className="button-container">
        <button type="submit" className="review-btn" disabled={!this.state.formValid}>Post Review</button>
        <Link to='/image-upload'>
          <button type="button" className="photo-upload-btn">
            <FontAwesomeIcon icon="camera" size="sm" />
            <span>Upload a Photo</span>
          </button>
        </Link>
        </div>
      </form>
      {this.state.fireRedirect && (
            <Redirect to={{
              pathname: `/places/${place.id}`,
              state: { place: place }}}
            />
      )}
      </>
    )
  }
}