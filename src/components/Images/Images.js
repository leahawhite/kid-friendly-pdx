import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Images.css' 

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
          <textarea 
            className="caption-text" 
            placeholder="Add a caption" 
            name="caption" 
            id="caption" 
            value={image.title}
            data-index={i} 
            onChange={e => props.addCaption(e)}>
          </textarea>
        </div>
      </div>
    )
  )
}

Images.defaultProps = {
  images: [],
  addCaption: () => {},
  removeImage: () => {},
}

