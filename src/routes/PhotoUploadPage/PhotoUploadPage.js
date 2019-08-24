import React, { Component } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import Images from '../../components/Images/Images'
import UploadButton from '../../components/UploadButton/UploadButton'
import Button from '../../components/Button/Button'
import TokenService from '../../services/token-service'
import config from '../../config'
import './PhotoUploadPage.css'

export default class UploadPhotosPage extends Component {
  state = {
    uploading: false,
    selectedFile: null,
    images: [],
    captions: [],
    error: null,
  }

  handleCancel = () => {
    const { history } = this.props
    history.goBack()
  }

  onChange = e => {
    e.preventDefault()
    this.setState({ uploading: true })
    
    const formData = new FormData()
    for (let i = 0; i < e.target.files.length; i++) {
      formData.append('file', e.target.files[i])
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
    
  filter = id => {
    return this.state.images.filter(image => image.public_id !== id)
  }

  removeImage = id => {
    this.setState({
      images: this.state.images.filter(image => image.id !== id)
    })
  }

  addCaption = (e, i) => {
    this.setState({
      captions: [...this.state.captions, e.target.value[i]]
    })
    console.log('captions', this.state.captions)
  }

  onError = id => {
    this.setState({ images: this.filter(id) })
  }

  onSubmit = e => {
    e.preventDefault()
    const { images } = this.state
    // const { place } = this.props.location.state
    // console.log('place', place)

    // need to deconstruct the images array to get properties
    const newImages = images.map((image, index) => (
      {
        id: image.id,
        src: image.src,
        // figure out why place isn't getting logged -- because db error?
        place_id: 1,
        // title: this.state.captions[index]
      }
    ))
    console.log('newImages', newImages)
    
    fetch(`${config.API_ENDPOINT}/images`, {
      method: 'POST',
      headers: {
        "Authorization": `bearer ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newImages)
      })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      this.setState({
        fireRedirect: true,
      })
    }
  
  render() {
    const { uploading, images, captions } = this.state

    const content = () => {
      switch(true) {
        case uploading:
          return <Spinner />
        case images.length > 0:
          return ( 
                <>
                  <Images 
                    images={images} 
                    removeImage={this.removeImage} 
                    addCaption={this.addCaption}
                    onError={this.onError}
                    captions={captions}
                  />
                  <div className="btn-container">
                    <Button btnType="submit" btnText="Finished" />
                  </div>
                </>
                 )
        default:
          return (
            <UploadButton iconClass="icon" uploadSpan="Browse Files" onChange={this.onChange} />
          ) 
      }
    }
    const hasError = this.state.error && <div className="error">{this.state.error}</div>

    return (
      <div className='upload-container'>
        <h2 className="upload-header">Upload Photos</h2>
        <form className="upload-form" onSubmit={this.onSubmit} action="/api/images/upload" method="post" encType="multipart/form-data">
          <div className='buttons'>
            {content()}
          </div>
          {hasError}
          <div className="cancel-container">
            <Button btnText="Cancel" btnType="button" onClick={this.handleCancel} />
          </div>
        </form>
      </div>
    )
  }
}