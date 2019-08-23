import React from 'react'
import { Link } from 'react-router-dom';
import Action from '../../components/Action/Action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './PlaceActions.css'

export default function PlaceActions(props) {
  const place = props.place || {}

  return (
    <section className="place-actions">
      <Action name="phone" link={`tel:+1-${place.phone}`} icon="phone" text="Call" />
      <Action 
        name="directions" 
        link={`https://www.google.com/maps/dir/?api=1&destination=${encodeURI(`${place.address},${place.city},${place.state} ${place.zipcode}`)}`} 
        icon="directions"
        text="Directions"
      />
      <Action name="website" link={place.website} icon="globe" text="Website" />
      <div className="place-write-review">
        <Link to={{
            pathname: `/places/${place.id}/reviews`,
            state: { place: place }
            }}>
            <FontAwesomeIcon icon="star" size="lg"/> 
            <p>Review</p>
        </Link>
      </div>
    </section>
  )
}

PlaceActions.defaultProps = {
  place: {}
}