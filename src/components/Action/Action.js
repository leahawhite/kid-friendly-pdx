import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Action(props) {
    const { name, link, icon, text} = props
    
    return (
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <div className={`place-${name}`}>
          <FontAwesomeIcon icon={icon} size="lg" />
          <p>{text}</p>
        </div>
      </a>
    )
}