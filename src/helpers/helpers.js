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



