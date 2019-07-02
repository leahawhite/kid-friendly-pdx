import React from 'react';
// import config from '../config';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      markers: []
    }
  }

  componentDidMount() {
 
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
    if (!this.props.google) {
      return <div>Loading...</div>
    }
    const style = {
      width: '400px',
      height: '400px'
    }
    const pos = {lat: 37.759703, lng: -122.428093}
    const { places } = this.props
    console.log(places)
    
    return (
      <div 
        className="map-container"
        style={style}
      >
        <Map
          google={this.props.google}
          style={{}} 
          zoom={14}
          initialCenter={{
            lat: 45.5155, lng: -122.6793
          }}
          onClick={this.onMapClick}
          draggable={true}
        >
          {places.map((place, index) => (
          <>
            <Marker 
              key={index}
              onClick={this.onMarkerClick}
              name={place.name}
              position={place.coordinates} 
            />
            <InfoWindow 
              key={index}
              onClose={this.onInfoWindowClose}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div className="infowindow">
                <h1>{this.state.selectedPlace.name}</h1>
                <h2>{place.name}</h2>
              </div>
            </InfoWindow>
          </>
          ))}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsdDZ5P1zY_soUX1qBLCTrVuN7HENqhjs'
})(MapContainer2)