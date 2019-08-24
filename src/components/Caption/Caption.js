import React from 'react'
import './Caption.css'

export default function Caption(props) {
  return (
    <div className="Caption">
      <textarea placeholder="Add a caption" name="caption" id="caption" value={this.state.caption} onChange={e => props.addCaption(e)}></textarea>
    </div>
  )
}