import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PlacesListItem.css';

export default class PlacesListItem extends Component {
  render() {
    const { place } = this.props
    return (
      <div className="place-item">
          <div className="place-thumbnail">
            <Link to='/places/{place.id}'><img alt="placeholder"></img></Link>
          </div>
          <div className="place-info">
            <h3 className="place-name"><Link to='/places/{place.id}'>{place.name}</Link></h3>
            <p className="place-rating">{place.average_review_rating}</p>
            <p className="place-tags">Descriptor tags</p>
          </div>
      </div>
    )
  }
}