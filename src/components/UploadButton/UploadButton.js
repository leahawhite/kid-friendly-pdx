import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label className="upload-btn" htmlFor='file'>
        <FontAwesomeIcon className={props.iconClass} icon='camera' size='10x' />
        <span className="upload-btn-text">{props.uploadSpan}</span>
      </label>
      <input type='file' name='file' id='file' onChange={props.onChange} multiple />
    </div>
  </div>