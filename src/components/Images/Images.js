import React from 'react'
import Caption from '../Caption/Caption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Images(props) {
  
  return (
    props.images.map((image, i) =>
      <div key={i} className='fadein'>
        <div 
          onClick={() => props.removeImage(image.public_id)} 
          className='delete'
        >
          <FontAwesomeIcon icon={faTimesCircle} size='2x' />
        </div>
        <img className="uploaded-images" src={image.src} alt={image.id} />
        <Caption addCaption={props.addCaption} />
      </div>
    )
  )
}

