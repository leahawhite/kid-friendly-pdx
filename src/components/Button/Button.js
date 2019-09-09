import React from 'react'
import './Button.css'

export default function Button(props) {
  return (
    <button type={props.btnType} className="form-button" aria-label={props.btnLabel}>
      <span>{props.btnText}</span>
    </button>
  )
}