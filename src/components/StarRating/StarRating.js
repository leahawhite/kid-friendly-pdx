import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function StarRating({rating}) {
  const stars = [
    { filled: false, half: false },
    { filled: false, half: false },
    { filled: false, half: false },
    { filled: false, half: false },
    { filled: false, half: false },
  ]

  const roundedDown = Math.floor(rating)
  const roundedHalf = Math.round(rating * 2) / 2;
    
  for (let i = 0; i < roundedDown; i++) {
    stars[i].filled = true
  }

  if (!Number.isInteger(roundedHalf)) {
    for (let i = roundedDown; i < rating; i++) {
      stars[i].half = true
    }
  }

  return <div className='StarRating'>
    { stars.map((star, index) => <Star key={index} filled={star.filled} half={star.half} />) }
  </div>
}

function Star({filled, half}) {
  if (filled) {
    return <FontAwesomeIcon className='gold' icon={ [ 'fas', 'star' ] } />
  } else if (half) {
    return <FontAwesomeIcon className='gold' icon='star-half-alt' />
    } else {
      return <FontAwesomeIcon className='gold' icon={ [ 'far', 'star' ] } />
    }
}
