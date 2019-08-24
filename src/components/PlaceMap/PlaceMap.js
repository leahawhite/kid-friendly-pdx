import React from 'react'
import Map from '../../components/Map/Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlaceMap.css'

export default function PlaceMap(props) {
  const place = props.place || {}
  const placeArray = [ place ]
  
  return (
    <div className="place-map">
      <div className="place-map-icon">
        <FontAwesomeIcon icon="map-marker-alt" size="lg" />
      </div>
      <div className="place-map-content">
        <div className="place-address">
          <p>{place.address}<br/>{place.city}{', '}{place.state}{' '}{place.zipcode}</p>
        </div>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(`${place.address},${place.city},${place.state} ${place.zipcode}`)}`}>
          <div className="place-map-container">   
            <Map 
              places={placeArray} 
              zoom={14} 
              center={{
                lat: place.latitude,
                lng: place.longitude
              }}
              infoClass="infowindow-hidden"
            />
          </div>
        </a>
      </div>
    </div>
  )
}

PlaceMap.defaultProps = {
  place: {}
}