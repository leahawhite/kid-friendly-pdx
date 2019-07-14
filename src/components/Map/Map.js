import React, { Component } from 'react'
import { compose } from "recompose"
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import { StarRating } from '../StarRating/StarRating';
import { readableReviewCount } from '../../helpers/helpers';
import config from '../../config';
import './Map.css'

const MapWithMarkers = compose(withScriptjs, withGoogleMap, 
  /*lifecycle({
  componentWillMount() {
    this.setState({
      zoomToMarkers: map => {
        const bounds = new window.google.maps.LatLngBounds();
        map.props.children.forEach((child) => {
          if (child.type === Marker) {
            bounds.extend(new window.google.maps.LatLng(child.props.position.lat, child.props.position.lng));
          }
        })
        map.fitBounds(bounds);
      }
    })
  },
}),*/)(props => {
  
  return (
    <GoogleMap ref={props.zoomToMarkers} defaultZoom={props.zoom} center={props.center} >
      {props.places.map(place => {
        const onMouseOver = props.onMouseOver.bind(this, place)
        const onMouseOut = props.onMouseOut.bind(this, place)
        const onClick = props.onClick.bind(this, place)
        const onClickClose = props.onClickClose.bind(this, place)
        
        return (
          <Marker
            key={place.id}
            position={{
              lat: place.coordinates.lat,
              lng: place.coordinates.lng
            }}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onClick={onClick}
            onClickClose={onClickClose}
            infoClass={props.infoClass}
          >
            {props.selectedPlace === place &&
              <InfoWindow
                onMouseOut={onMouseOut}
                onClickClose={onClickClose}
                infoClass={props.infoClass}
              >
                <div className="infowindow">
                  <h3 className="infowindow-place-name">{place.name}</h3>
                  <div className={props.infoClass}>
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
      selectedPlace: null,
    }
  }

  handleMouseOver = (place, event) => {
    this.setState({ selectedPlace: place })
  }

  handleMouseOut = (place, event) => {
    this.setState({ selectedPlace: null })
  }

  handleClick = (place, event) => {
    this.setState({ selectedPlace: place })
  }

  handleClickClose = (place, event) => {
    this.setState({ selectedPlace: null })
  }

  render() {
    return (
      <MapWithMarkers
        selectedPlace={this.state.selectedPlace}
        places={this.props.places}
        zoom={this.props.zoom}
        center={this.props.center}
        onClick={this.handleClick}
        onClickClose={this.handleClickClose}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
        infoClass={this.props.infoClass}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.GAPI_KEY}&libraries=places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `250px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}