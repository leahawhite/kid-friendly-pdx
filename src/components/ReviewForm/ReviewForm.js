import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import StarRatingComponent from 'react-star-rating-component'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import data from '../../data';
import './ReviewForm.css';


export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: data.reviews,
      rating: 0,
      fireRedirect: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { place } = this.props
    const newId = this.state.reviews.slice(-1)[0].id + 1
    const newReview = {
      id: newId,
      star_rating: Number(this.state.rating),
      text: e.target.text.value,
      date_created: new Date(),
      place_id: place.id,
      // how to capture userId here through auth?
      // user_id: "2",
    }
    console.log('newReview', newReview)
    
    this.setState({
      reviews: { ...this.state.reviews, ...newReview },
      fireRedirect: true,
    })
  }

  onStarClick = (nextValue, prevValue, name) => {
    this.setState({
      rating: nextValue
    })
  }

  uploadPhotos = e => {
    console.log('go to photo form')
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
              onStarClick={this.onStarClick}/>
          </div>
        </div>
        <div className="text">
          <textarea placeholder="Share your experience with others. How kid-friendly is this place?" name="text"></textarea>
        </div>
        <button type="submit" className="review-btn">Post Review</button>
        <Link to='/image-upload'>
          <button type="button" className="photo-upload-btn" onClick={this.uploadPhotos}>
            <FontAwesomeIcon icon="camera" size="sm" />
            <span>Upload a Photo</span>
          </button>
        </Link>
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