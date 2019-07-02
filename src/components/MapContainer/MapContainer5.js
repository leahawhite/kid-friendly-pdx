import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '400px',
  height: '400px'
};

export class MapContainer5 extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { places } = this.props
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 45.5155, lng: -122.6793 }}
        places={places}
      >
        {places.map((place, index) => 
          <>
          <Marker key={index} onClick={this.onMarkerClick} name={place.name} />
          <InfoWindow key={place.id} marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
          </>
        )}
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsdDZ5P1zY_soUX1qBLCTrVuN7HENqhjs'
})(MapContainer5);