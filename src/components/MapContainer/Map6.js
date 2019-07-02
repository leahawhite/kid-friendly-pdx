import React, { useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import Marker6 from "./Marker6";
import InfoWindow from './InfoWindow';

const Map6 = withScriptjs(withGoogleMap((props) => {

  const [selectedPlace, setSelectedPlace] = useState(null);

  const markers = props.places.map(place => 
    <Marker6
      key={place.id}
      place={place}
      name={place.name}
      location={{lat: place.coordinates.lat, lng: place.coordinates.lng}}
      onClick={() => {
        setSelectedPlace(place);
      }}
    />
  );

  const infoWindow = selectedPlace && (
    <InfoWindow
      position={{lat: selectedPlace.coordinates.lat, lng: selectedPlace.coordinates.lng}}
      onCloseClick={() => {
        setSelectedPlace(null);
      }}
    />)
                  
  return (
      <GoogleMap
        defaultZoom={10}
        center={{ lat: 45.5155, lng: -122.6793 }} //Portland, OR
        >
        {markers}
        {infoWindow}
      </GoogleMap>
    );
  }
))

export default Map6;
