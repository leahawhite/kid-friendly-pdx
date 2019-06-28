import Geocode from 'react-geocode'

Geocode.setApiKey("AIzaSyDsdDZ5P1zY_soUX1qBLCTrVuN7HENqhjs");

export function GeocodeAddress(address) {

  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    error => {
      console.error(error);
    }
  );
}
