import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIceCream } from '@fortawesome/free-solid-svg-icons'

export default () => 
  <div className='spinner fadein'>
    <FontAwesomeIcon icon={faIceCream} size='5x' color='#3B5998' />
  </div>