import React, { Component } from 'react'
import { compose } from "recompose"
import { Link } from 'react-router-dom'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { StarRating } from '../StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import config from '../../config';
import './Map.css'

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={12} center={{ lat: 45.5155, lng: -122.6793 }}>
      {props.places.map(place => {
        const onMouseOver = props.onMouseOver.bind(this, place)
        const onMouseOut = props.onMouseOut.bind(this, place)
        return (
          <Marker
            key={place.id}
            position={{
              lat: place.coordinates.lat,
              lng: place.coordinates.lng
            }}
            onMouseOver={onMouseOver}
            // onMouseOut={onMouseOut}
          >
            {props.selectedPlace === place &&
              <InfoWindow
                onMouseOut={onMouseOut}
                maxWidth={0}
              >
                <div className="infowindow">
                  <h3 className="infowindow place-name">
                    <Link to={{
                      pathname: `/places/${place.id}`,
                      state: { place: place }
                      }}>
                    {place.name}
                    </Link>
                  </h3>
                  <div className="infowindow-image-container">
                    {place.images.length ? <img className="infowindow-place-image" src={place.images[0].src} alt={place.images[0].title}></img> 
                    : null}
                  </div>
                  <div className="place-info-reviews">
                    <div className="star-rating">
                      <StarRating rating={place.average_review_rating} />
                    </div>
                    <span>{readableReviewCount(place.number_of_reviews)}</span>
                    <p className="infowindow-address">
                      {place.address1}{place.address2}<br/>{place.city}{', '}{place.state}{' '}{place.zipcode}</p>
                  </div>
                </div>
              </InfoWindow>
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: this.props.places,
      selectedPlace: null
    }
  }

  handleMouseOver = (place, event) => {
    this.setState({ selectedPlace: place })
  }

  handleMouseOut = (place, event) => {
    this.setState({ selectedPlace: null })
  }

  render() {
    return (
      <MapWithAMarker
        selectedPlace={this.state.selectedPlace}
        places={this.state.places}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.GAPI_KEY}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}