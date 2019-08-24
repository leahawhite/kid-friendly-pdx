import React, { Component } from 'react';
import { StarRating } from '../../components/StarRating/StarRating';
import CarouselLB from '../../components/CarouselLB/CarouselLB';
import moment from 'moment';
import './Review.css';

export default class Review extends Component {
  static defaultProps = { review: {}, users: [] }

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  handleExpandText = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  getTruncatedText(review, words) {
    if (!this.state.expanded) {
      return (
        <>
        {words.slice(0, 25).join(' ') + ' ...'}
        <button className="read-btn" onClick={this.handleExpandText}>Read more</button>
        </>
      )
    } else {
      return (
        <>
        {review.text}
        <button className="read-btn" onClick={this.handleExpandText}>Read less</button>
        </>
      )
    }
  }
  
  getReviewContent = (review) => {
    const words = review.text.split(' ')
    if (words.length < 25) {
      return review.text
    } else {
      return this.getTruncatedText(review, words)
    }
  }

  render() {
    const { review } = this.props
      return (
        <li className="places-item-review" key={review.id}>
          <p className="username">{review.user.display_name}</p>
          <div className="places-item-review-star-rating">
            <div className="star-rating">
            <StarRating rating={review.rating} />
            </div>
            <span>{moment(new Date(review.date_created)).format('MM/DD/YYYY')}</span>
          </div>
          <div className="review-content">
            {this.getReviewContent(review)}
          </div>
          <div className="review-image-container">
            {review.images && review.images.length ?    
            <CarouselLB images={review.images} imagesClass='review-image'/>
            : null}
            </div>
        </li>
      )
  }
}
