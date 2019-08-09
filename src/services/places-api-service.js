import config from '../config'
import TokenService from './token-service'

const PlacesApiService = {
  getPlaces(url) {
    return fetch(url)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  getById(placeId) {
    return fetch(`${config.API_ENDPOINT}/places/${placeId}`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postReview(newReview) {
    return fetch(`${config.API_ENDPOINT}/reviews`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newReview),
    })
  },
  postImagesToCloudinary(formData) {
    return fetch(`${config.API_ENDPOINT}/images/upload`, {
      method: 'POST',
      body: formData
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  },
  postImages(newImages) {
    return fetch(`${config.API_ENDPOINT}/images`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newImages),
    })
  },
  getReviewsForPlace(placeId) {
    return fetch(`${config.API_ENDPOINT}/places/${placeId}/reviews`)
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
  }
  
}

export default PlacesApiService