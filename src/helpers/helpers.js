/*export function numberOfReviews(place) {
  const placeReviews = reviews.filter(review.place_id == place.id)
  return placereviews.length
}

export function averageReviewRating(place) {
  const placeReviews = reviews.filter(review.place_id == place.id)
  const ratingArray = placeReviews.map(review => review.rating) 
  const ratingsSum = ratingArray.reduce(function(a,b){return a + b})
  const numReviews = this.numberOfReviews(place)
  return ratingsSum / numReviews
}*/

export function readableReviewCount(number) {
  switch(number) {
    case 0:
      return 'no reviews yet'

    case 1:
      return `1 review`

    default:
      return `${number} reviews`
  }
}

export const testPlace = {
  id: 1,
  name: "Atlas Pizza",
  address: "6529 SE Foster Rd",
  city: "Portland",
  state: "OR",
  zipcode: "97206",
  lat: 45.489200,
  lng: -122.595070,
  neighborhood: "SE",
  phone: "503-232-3004",
  website: "http://atlaspizzapdx.com",
  hours: [
    {
      "dayOfWeek": "Monday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Tuesday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Wednesday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Thursday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Friday",
      "opens": "12:00 pm",
      "closes": "12:00 am",
    },
    {
      "dayOfWeek": "Saturday",
      "opens": "12:00 pm",
      "closes": "12:00 am",
    },
    {
      "dayOfWeek": "Sunday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
  ],
  date_created: "2019-06-13",
  category: ["restaurants",],
  descriptors: [ "pizza", "arcade", "beer" ],
  features: { 
    "toys": true, 
    "play area": true, 
    "arcade": true,
    "quick service": true,
    "all ages": true,
    "comfortable seating": true,
    "friendly staff": true,
    "kids menu": false,
    "highchairs/boosters": false,
    "changing station": false,
    "flexible": true,
    "patio/sidewalk": true,
  },
  images: [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/ir83SjI1lJpHK4E5vQFwD7LfyE__eKaIvBtmFf1nV5wyfq-z5LVe4u7PuQvQ7ycqsFlGMe5vw3UNRB86G3SjLckIZKHgFSkz0-oQdLAAP2UxlUwq-HqDA116RjcI3iG-lA1ftsYr9S4=w2400',
      title: `Atlas Pizza's 'Jalapeno Popper' pie`,
      place_id: 1,
      user_id: 2,
      review_id: 1,
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/CjUvS4WgCiSRTsUUAryiPcczqAdyaSDhDg1ZTT6OrdgjfdNiTE5Q14pwI-C2m49tSjQHMnBxDgpiZyYZkxEDE3KzI3DWLsT631ROrF1zTuJcBqEXcRN8PP5U3EcG-bmMclE_uKmWh2E=w2400',
      title: 'A rainbow over Foster Blvd',
      place_id: 1,
      user_id: 1,
      review_id: 2,
    },
  ],
  number_of_reviews: 2,
  average_review_rating: 4.5,
};

export const testReviews = [
  { 
    id: 1,
    star_rating: 5,
    text: "Atlas is our new favorite spot for a quick, painless dinner with our toddler. It's super casual -- order slices or pies at the counter, and they call your name for pickup when it's ready. Since it's new, the play area is pretty clean and well-stocked. There's an old church pew there for parents to sit and supervise, but the open floor plan means that you can see the play area from pretty much every table. We've only ordered slices, so we've never had to wait long. We're usually in and out in 30 minutes, which is just about perfect for us.",
    date_created: "2019-06-13",
    place_id: 1,
    user_id: 5,
    images: [
      {
        id: 1,
        src: 'https://lh3.googleusercontent.com/QDwk6G6ZCwYzVH-yJHQ824GZ1wKW2XXus8hxxdH-4AAHz-FejC-UVydyE5le1ZvPTIo1cXw1G25qhljwS8dgyIedCCFtIxBonznVQ4LfaPDEZVWmqKS1vFqVUFFNmMmMlKQ5eCpfhNI=w2400',
        title: `Atlas Pizza's play area`,
        place_id: 1,
        user_id: 5,
      },
    ]
  },
  { 
    id: 2,
    star_rating: 4,
    text: "Very easy place to take kids of all ages. Nice toy area with a great variety of toys!",
    date_created: "2019-06-13",
    place_id: 1,
    user_id: 1,
    images: [],
  },
];



