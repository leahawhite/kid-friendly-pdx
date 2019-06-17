import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Place.css';

export default class Place extends Component {
  render() {
    return (
      <>
        <div className="place-info">
          <h3 className="place-name">Place Name</h3>
          <p className="place-rating">Rating</p>
          <p className="place-tags">Descriptor tags</p>
          <p>Hours</p>
          <button className="review-btn"><Link to='/places/:placeId/reviews'>Review this place</Link></button>
        </div>
        <PlaceFeatures />
        <PlaceImages />
        <PlaceReviews />
      </>
    )
  }
}

function PlaceFeatures({ features=[] }) {
  return(
    <div className="place-features">
        <h2>Kid-friendly features</h2>
         <div className="features-list">
            {/* features mapping function here */}
            <p>toy area</p>
            <p>quick service</p>
            <p>friendly/tolerant</p>
            <p>comfortable seating</p>
        </div>
      </div>
  )
}

function PlaceImages({ images=[] }) {
  return (
    <div className="places-item-image-carousel" src="" alt="placeholder">
      {/* image mapping to carousel here? */}
      [Image carousel]
    </div>
  )
}

function PlaceReviews({ reviews=[] }) {
  return (
    <ul class="places-item-reviews">
      {/* review mapping function */}
      <li class="places-item-review">
            <p class="username">Username</p>
            <p>Rating</p>
            <p>Date submitted</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Netus et malesuada fames ac turpis egestas integer eget aliquet. Consectetur adipiscing elit pellentesque habitant morbi. Tellus at urna condimentum mattis pellentesque. </p>
            {/* write function for resizing images? */}
            <img src="" alt="restaurant"/>
      </li>
    </ul>
  )
}