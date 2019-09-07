import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component'
import UploadButton from '../UploadButton/UploadButton'
import Images from '../Images/Images'
import Spinner from '../Spinner/Spinner'
import PlacesApiService from '../../services/places-api-service'
import ValidationError from '../ValidationError/ValidationError'
import './ReviewForm.css';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uploading: null,
      images: [],
      captions: [],
      error: null,
      rating: 0,
      text: "",
      ratingValid: false,
      validationMessages: {
        rating: "",
      }
    }
  }

  onChange = e => {
    e.preventDefault()
    this.setState({ uploading: true, error: null })

    // this doesn't stop images from being sent to server
    if (e.target.files.length > 3) {
      this.setState({
        error: 'Only 3 images can be uploaded at a time'
      })
    }

    const types = ['image/png', 'image/jpeg', 'image/gif']
    const formData = new FormData()
    for (let i = 0; i < e.target.files.length; i++) {
      if (types.every(type => e.target.files[i].type !== type)) {
        this.setState({
          error: `'${e.target.files[i].type}' is not a supported format`
        })
      }
      formData.append('file', e.target.files[i])
    }

    PlacesApiService.postImagesToCloudinary(formData)
      .then(images => {
        this.setState({ 
          uploading: false,
          images
        })
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.id !== id)
    })
  }

  addCaption = e => {
    let captions = [...this.state.captions]
    let index = e.target.attributes.getNamedItem('data-index').value
    captions[index] = e.target.value
    this.setState({ captions })
  }

  onError = id => {
    this.setState({ images: this.filter(id) })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { place } = this.props
    const { images, captions } = this.state
    const newReview = {
      rating: this.state.rating,
      text: e.target.text.value,
      place_id: place.id
    }
    const newImages = images.map((image, index) => (
      {
        id: image.id,
        src: image.src,
        place_id: place.id,
        title: captions[index]
      }
    ))
    this.props.insertReviewsAndImages(newReview, newImages)
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

  renderImages = () => {
    const { images, uploading, captions } = this.state
    if (uploading)
      return <Spinner />
    else if (images.length)
      return <Images 
                images={images} 
                removeImage={this.removeImage} 
                addCaption={this.addCaption}
                onError={this.onError}
                captions={captions}
              />
    else return null;
  }
 
  render() {
    const { place } = this.props
    const { rating, error } = this.state
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
        <div role="alert">
          {error && <p className="error">{error}</p>}
        </div>
        <form className="review-form" onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
          <div className="star-rating-select">
            <label htmlFor="rating">Your rating: </label>
            <div className="star-container" style={starStyle}>
              <StarRatingComponent 
                name="rating"
                starCount={5}
                value={rating}
                onStarClick={this.updateRating}/>
            </div>
          </div>
          <ValidationError hasError={!this.state.ratingValid} message={this.state.validationMessages.rating}/>
          <div className="text">
            <textarea className="review-text" required placeholder="Share your experience with others. How kid-friendly is this place?" name="text"></textarea>
          </div>
          <UploadButton iconClass="icon" uploadSpan="Upload Photos" onChange={this.onChange} />
          <div className='upload-container'>
            <div className="render-container">
              {this.renderImages()}
            </div>
          </div>
          <div className="button-container">
            <button type="submit" className="review-btn" /*disabled={!this.state.formValid}*/>Post Review</button>
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