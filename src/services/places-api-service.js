import config from '../config'

const PlacesApiService = {
  getPlaces(url) {
    return fetch(url)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  
}

export default PlacesApiService