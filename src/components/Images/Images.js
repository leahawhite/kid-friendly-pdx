import React from 'react'
// import Caption from '../Caption/Caption'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default function Images(props) {
  
  return (
    props.images.map((image, i) =>
      <div key={i} className='fadein'>
        <div 
          onClick={() => props.removeImage(image.id)} 
          className='delete'
        >
          <FontAwesomeIcon icon={faTimesCircle} size='2x' />
        </div>
        <img className="uploaded-images" src={image.src} alt={image.id} />
        <div className="Caption">
          <textarea placeholder="Add a caption" name="caption" id="caption" value={image.title} onChange={(e, i) => props.addCaption(e, i)}></textarea>
        </div>
        {/* <Caption addCaption={props.addCaption} /> */}
      </div>
    )
  )
}

