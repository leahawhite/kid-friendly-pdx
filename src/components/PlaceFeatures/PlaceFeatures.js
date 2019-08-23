import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlaceFeatures.css'

export default function PlaceFeatures(props) {
  const place = props.place || {} 
  
  return (
    <div className="place-features">
      <div className="place-features-icon">
        <FontAwesomeIcon icon="child" size="lg"/>
      </div>
      <div className="place-features-content">
        <h2>Kid-friendly features</h2>
        <div className="features-list">
          {place && place.features && place.features.length && place.features.map((feature, index) =>
            <p className="place-feature" key={index}>{feature}</p>
          )}
        </div>
      </div>
    </div>
  )
}

PlaceFeatures.defaultProps = {
  place: {}
}