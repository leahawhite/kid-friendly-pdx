import React, { Component } from 'react';
import './MapContainer.css';

const INITIAL_LOCATION = {
  address: 'Portland, Oregon',
  position: {
    latitude: 45.5155, 
    longitude: -122.6793
  }
}

const INITIAL_MAP_ZOOM_LEVEL = 11;

export default class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.mapElement = null;
    this.setMapElementReference = mapElementReference => {
      this.mapElement = mapElementReference;
    }
    this.state = {
     address: this.props.address,
     isGeocodingError: false,
    }
  }

  componentDidMount() {
    // get map from google
    this.map = new window.google.maps.Map(this.mapElement, {
      zoom: INITIAL_MAP_ZOOM_LEVEL,
      center: {
        lat: INITIAL_LOCATION.position.latitude, 
        lng: INITIAL_LOCATION.position.longitude
      }
    });
    this.marker = new window.google.maps.Marker({
      map: this.map,
      position: {
        lat: INITIAL_LOCATION.position.latitude, 
        lng: INITIAL_LOCATION.position.longitude 
      }
    });
    this.geocoder = new window.google.maps.Geocoder();
    this.geocodeAddress()
  }
  
  geocodeAddress() {
    this.geocoder.geocode({ 'address': this.props.address }, function handleResults(results, status) {
      if (status === window.google.maps.GeocoderStatus.OK) {
        this.setState({
          isGeocodingError: false
        })
        this.map.setCenter(results[0].geometry.location);
        this.marker.setPosition(results[0].geometry.location);

        return;
      } else {
        this.setState({
          isGeocodingError: true
        })
        this.map.setCenter({
          lat: INITIAL_LOCATION.position.latitude, 
          lng: INITIAL_LOCATION.position.longitude
        });
        this.marker.setPosition({
          lat: INITIAL_LOCATION.position.latitude, 
          lng: INITIAL_LOCATION.position.longitude
        });
      }
    }.bind(this))
  }

  render() {
    return (
      <div className="map-container">
        {this.state.isGeocodingError
        ? <p className="bg-danger">Address not found.</p>
        : null }
        <div className="map" ref={this.setMapElementReference}></div>
      </div>
    );
  }
}