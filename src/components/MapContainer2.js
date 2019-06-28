import React from 'react';
// import config from '../config';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GeocodeAddress } from './Geocode'

const INITIAL_LOCATION = {
  address: 'Portland, Oregon',
  position: {
    latitude: 45.5155, 
    longitude: -122.6793
  }
}

export class MapContainer2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      isGeocodingError: false,
      markers: []
    }
  }

  componentDidMount() {
    this.geocoder = new window.google.maps.Geocoder();
    this.geocodeAddress()
  }

  geocodeAddress() {
    const locationsArr = []
    const { places } = this.props
    places.map((place, i) => {
      this.geocoder.geocode({ 'address': place.address }, function handleResults(results, status) {
        if (status === window.google.maps.GeocoderStatus.OK) {
          this.setState({
            isGeocodingError: false
          })
          locationsArr.push({
            position: {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng(),
            },
            key: i,
            defaultAnimation: 2,
          })
        }
      }.bind(this))
    })
  }
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClick = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }

  onInfoWindowClose = () => {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    })
  }

  render() {
    const { places } = this.props
    console.log(places)
    
    
    var points = GeocodeAddress(places.a)
    var bounds = new this.props.google.maps.LatLngBounds();
    for (var i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    }
    return (
      <div 
        className="map-container"
        style={{ position: "relative", height: "400px", width: "400px" }}
      >
        <Map
          google={this.props.google}
          style={{}} 
          zoom={14}
          initialCenter={{
            lat: 45.5155, lng: -122.6793
          }}
          onClick={this.onMapClicked}
          bounds={bounds}
          draggable={true}
        >
          {places}
          <Marker 
            onClick={this.onMarkerClick}
            name={'Current location'} 
          />
          <InfoWindow 
            onClose={this.onInfoWindowClose}
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsdDZ5P1zY_soUX1qBLCTrVuN7HENqhjs'
})(MapContainer2)