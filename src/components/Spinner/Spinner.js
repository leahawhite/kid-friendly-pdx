import React, { Component } from 'react'
import './Spinner.css'

export default class Pinwheel extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={require('../../images/pinwheel.svg')} alt="pinwheel spinner" />
      </div>
    )
  }
}