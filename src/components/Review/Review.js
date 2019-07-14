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
    const { review, users } = this.props
    const userId = review.user_id
    const username = users.length && users.find(user => user.id === userId).display_name
      return (
        <li className="places-item-review" key={review.id}>
          <p className="username">{username}</p>
          <div className="places-item-review-star-rating">
            <div className="star-rating">
            <StarRating rating={review.star_rating} />
            </div>
            <span>{moment(review.date_created).format('MM/DD/YYYY')}</span>
          </div>
          <div className="review-text">
            {this.getReviewContent(review)}
          </div>
          <div className="review-image-container">
            {review.images.length ?    
              <CarouselLB images={review.images} imagesClass='review-image'/>
            : null}  
          </div>
        </li>
      )
  }
}
