import React, { Component } from 'react';
import './MapContainer3.css';

const initialLoc = {
  address: 'Portland, Oregon',
  position: {
    latitude: 45.5155, 
    longitude: -122.6793
  }
}

const initialZoom = 13;

export default class MapContainer3 extends Component {
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
    this.map = new window.google.maps.Map(this.mapElement, {
      zoom: initialZoom,
      center: {
        lat: initialLoc.position.latitude, 
        lng: initialLoc.position.longitude
      }
    });
    this.marker = new window.google.maps.Marker({
      map: this.map,
      position: {
        lat: initialLoc.position.latitude, 
        lng: initialLoc.position.longitude 
      }
    });    
    this.infoWindow = new window.google.maps.InfoWindow();
    
    window.eqfeed_callback = function(results) {
      const { places } = this.props
      for (let i = 0; i < places.length; i++) {
        const coords = places[i].coordinates;
        const latLng = new window.google.maps.LatLng(coords.lat,coords.lng);
        const marker = new window.google.maps.Marker({
          position: latLng,
          map: this.map,
          title: places[i].title
        });
      }
    }
  }
  


/* google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
}*/

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