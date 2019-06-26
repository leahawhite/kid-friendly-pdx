import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import data from '../../data';
import './ReviewForm.css';


export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: data.reviews,
      fireRedirect: false,
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    const { place } = this.props
    const newId = this.state.reviews.slice(-1)[0].id + 1
    const newReview = {
      id: newId,
      star_rating: Number(e.target.rating.value),
      text: e.target.text.value,
      date_created: new Date(),
      place_id: place.id,
      // user_id: "2",
    }
    console.log('newReview', newReview)
    
    this.setState({
      reviews: { ...this.state.reviews, ...newReview },
      fireRedirect: true,
    })
  }

  uploadPhotos = e => {
    console.log('go to photo form')
  }

  render() {
    const { place } = this.props
    return (
      <>
      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="select">
          {/* see if i can find a good star rating tool for this */}
          <label htmlFor="rating">Your rating: </label>
          <select name="rating" >
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div className="text">
          <textarea placeholder="Share your experience with others." name="text"></textarea>
        </div>
        {/* add section for uploading images? */}
        <button type="submit" className="review-btn">Post Review</button>
        <button type="button" className="photo-upload-btn" onClick={this.uploadPhotos}>
          <FontAwesomeIcon icon="camera" size="sm" />
          <span>Upload a Photo</span>
        </button>
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