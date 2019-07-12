import React, { Component } from 'react';
import './MapContainer.css';

export default class MapContainer extends Component {
  constructor(props) {
    super(props)

    this.mapElement = null;
    this.setMapElementReference = mapElementReference => {
      this.mapElement = mapElementReference;
    }
    this.state = {
     address: this.props.address,
    }
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapElement, {
      zoom: 13,
      center: {
        lat: this.props.coordinates.lat, 
        lng: this.props.coordinates.lng
      }
    });
    this.marker = new window.google.maps.Marker({
      map: this.map,
      position: {
        lat: this.props.coordinates.lat, 
        lng: this.props.coordinates.lng
      }
    });
  }
  
  render() {
    return (
      <div className="map-container">
        <div className="map" ref={this.setMapElementReference}></div>
      </div>
    );
  }
}