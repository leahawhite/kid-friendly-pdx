import React, { Component } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import Images from '../../components/Images/Images'
import UploadButton from '../../components/UploadButton/UploadButton'
import Button from '../../components/Button/Button'
import config from '../../config'
import './PhotoUploadPage.css'

export default class UploadTrial extends Component {
  state = {
    uploading: false,
    selectedFiles: null,
    images: []
  }

  onSubmit = e => {
    this.setState({ uploading: true })
    // this might be screwing up multer
    // const files = Array.from(e.target.files)
    
    const formData = new FormData()
    for (let x = 0; x < this.state.selectedFiles.length; x++) {
      formData.append('myImages', this.state.selectedFiles[x])
    }
    
    fetch(`${config.API_ENDPOINT}/images/upload`, {
      method: 'POST',
      body: formData
    })
    .then(res =>
      (!res.ok)
        ? res.json().then(e => Promise.reject(e))
        : res.json()
    )
    .then(images => {
      this.setState({ 
        uploading: false,
        images
      })
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }
  /*onSubmit = e => {
    e.preventDefault()
    const formData = new FormData()
    console.log('formdata', Array.from(formData.entries()))
    fetch(`${config.API_ENDPOINT}/images/upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(images => {
      this.setState({
        uploading: false, 
        images: images
      })
    })
    .catch(error => console.error('Error:', error))
  }*/

  onChange = e => {
    this.setState({
      selectedFiles: e.target.files
    });
    
  }

  render() {
    const { images } = this.state
    const results = images && images.map((image, idx) => (
      <div key={idx} className="reviewImage">
        <img className="uploaded-images" src={image.secure_url} alt={image.id} />
      </div>
  ))
    return (
      <>
      <form action='/api/images/upload' method="post" encType="multipart/form-data" onSubmit={this.onSubmit}>
        <label htmlFor="file">Upload file</label>
        <input type='file' name='myImages' id="myImages" multiple onChange={this.onChange}/>
        <button type="submit">Submit</button>
      </form>
      {results}
      </>
    )
  }
}