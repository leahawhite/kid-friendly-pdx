import React, { Component } from 'react';
import { StarRating } from '../../components/StarRating/StarRating';
import CarouselLB from '../../components/CarouselLB/CarouselLB';
import moment from 'moment';
import './Review.css';

export default class Review extends Component {
  static defaultProps = { review: {} }

  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  handleExpandedText = () => {
    this.setState({
      expanded: !this.state.expanded
    })
  }

  getMoreText = (review) => {
    if (this.state.expanded) {
      return (
        <>
        {review.text}
        <button className="read-btn" onClick={this.handleExpandedText}>Read less</button>
        </>
      )
    } else {
      return (
        <>
        {truncate(review.text)}
        <button className="read-btn" onClick={this.handleExpandedText}>Read more</button>
        </>
      )
    }
  }

  render() {
    const { review, users } = this.props
    const userId = review.user_id
    const username = users.find(user => user.id === userId).display_name
    const expandedText = this.getMoreText(review)
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
            {expandedText}
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

function truncate(text) {
  const words = text.split(' ')
  if (words.length > 25) {
    return words.slice(0, 25).join(' ') + ' ...'
  }
  return text
}