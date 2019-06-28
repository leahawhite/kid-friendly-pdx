import React, { Component } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import Images from '../../components/Images/Images'
import UploadButton from '../../components/UploadButton/UploadButton'
// import { API_URL } from '../../config'
import './PhotoUploadPage.css'

export default class UploadPhotosPage extends Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
  }
  
  state = {
    uploading: false,
    images: [],
    error: null
  }

  handleCancel = () => {
    const { history } = this.props
    history.goBack()
  }

  /*onChange = e => {
    const files = Array.from(e.target.files)

    if (files.length > 3) {
      const msg = 'Only 3 images can be uploaded at a time'
      return this.toast(msg, 'custom', 2000, toastColor)  
    }

    const formData = new FormData()
    const types = ['image/png', 'image/jpeg', 'image/gif']

    files.forEach((file, i) => {

      if (types.every(type => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`)
      }

      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`)
      }

      formData.append(i, file)
    })

    if (errs.length) {
      return errs.forEach(err => this.toast(err, 'custom', 2000, toastColor))
    }

    this.setState({ uploading: true })

    fetch(`${API_URL}/image-upload`, {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) {
        throw res
      }
      return res.json()
    })
    .then(images => {
      this.setState({
        uploading: false, 
        images
      })
    })
    .catch(err => {
      err.json().then(e => {
        this.setState({ 
          uploading: false,
          error: err.message
        })
      })
    })
  }*/

  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  onError = id => {
    // this.toast('Oops, something went wrong', 'custom', 2000, toastColor)
    this.setState({ images: this.filter(id) })
  }
  
  render() {
    const { uploading, images, error } = this.state

    const hasError = error
    ? <div className="error-message">{error}</div>
    : "";
    
    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return <Images 
                  images={images} 
                  removeImage={this.removeImage} 
                  // onError={this.onError}
                 />
        default:
          return <UploadButton onChange={this.onChange} />
      }
    }

    return (
      <div className='container'>
        <h2 className="upload-header">Upload Photos</h2>
        {hasError}
        <div className='buttons'>
          {content()}
        </div>
        <div className="cancel-container">
          <button className="cancel-btn" type="button" onClick={this.handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    )
  }
}