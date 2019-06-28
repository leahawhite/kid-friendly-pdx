import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props => 
  <div className='buttons fadein'>
    <div className='button'>
      <label htmlFor='multi'>
        <FontAwesomeIcon icon='camera' size='10x' />
      </label>
      <input type='file' id='multi' onChange={props.onChange} multiple />
    </div>
  </div>