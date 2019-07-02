import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'

const Gmap = withScriptjs(withGoogleMap((props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPlace(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  console.log('selectedPlace', selectedPlace)

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.5155, lng: -122.6793 }}
    >
      {props.places.map(place => (
        <Marker
          key={place.id}
          position={{
            lat: place.coordinates.lat,
            lng: place.coordinates.lng
          }}
          onClick={() => {
            setSelectedPlace(place);
          }}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          selectedPlace={this.state.selectedPlace}
          onCloseClick={() => {
            setSelectedPlace(null);
          }}
          position={{
            lat: selectedPlace.coordinates.lat,
            lng: selectedPlace.coordinates.lng
          }}
        >
          <div>
          <Link to={{
              pathname: `/places/${selectedPlace.id}`,
              state: { place: selectedPlace }}}
          >
            <h2>{selectedPlace.name}</h2>
          </Link>  
            <p>{selectedPlace.address}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  )
}))

export default Gmap