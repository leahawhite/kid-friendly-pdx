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