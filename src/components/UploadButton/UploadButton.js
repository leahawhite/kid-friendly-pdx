import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './UploadButton.css'

export default props => 
  <div className='upload-btn'>
    <div className='button'>
      <label htmlFor='file'>
        <FontAwesomeIcon className={props.iconClass} icon='camera' size='lg' />
        <span className="upload-btn-text">{props.uploadSpan}</span>
      </label>
      <input type='file' name='file' id='file' onChange={props.onChange} multiple />
    </div>
  </div>