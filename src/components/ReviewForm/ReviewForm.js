import React, { Component } from 'react';
import './ReviewForm.css';

export default class ReviewForm extends Component {
  render() {
    return (
      <form class="review-form">
        <div class="select">
          <label for="rating">Your rating: </label>
          <select id="rating">
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <div class="text">
          <textarea placeholder="Share your experience with others."id="text"></textarea>
        </div>
        {/* add section for uploading images? */}
        <button type="submit" class="review-btn">Post Review</button>
      </form>
    )
  }
}