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
    error: null,
    captions: []
  }

  handleCancel = () => {
    const { history } = this.props
    history.goBack()
  }

  onChange = e => {
    this.setState({
      selectedFile: e.target.files
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.setState({ uploading: true })
    // this might be screwing up multer
    // const files = Array.from(e.target.files)
    
    const formData = new FormData()
    for (let i = 0; i < this.state.selectedFile.length; i++) {
      formData.append('file', this.state.selectedFile[i])
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
      console.log('images', images)
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
      images: this.state.images.filter(image => image.public_id !== id)
    })
  }

  addCaption = text => {
    this.setState({
      captions: [...this.state.captions, text]
    })
  }

  onError = id => {
    this.setState({ images: this.filter(id) })
  }

  /*submitImagestoDB = (e) => {
    e.preventDefault()
    const { images } = this.state
    const { place } = this.props.location.state
    // need to deconstruct the images array to get properties
    images.map(image => {
      const newImage = {
      id: image.public_id,
      src: image.secure_url,
      place_id: place.id,
      // caption: how to get this from array in this.state? 
      // user_id: TBD
      }
      return newImage
    })
    fetch(`${config.API_URL}/images`, {
      method: 'POST',
      headers: {
        "Authorization": `basic ${TokenService.getAuthToken()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newImage)
      })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
        .then(data => {
          e.target.text.value = ''
        })
        .catch(res => {
          this.setState({ error: res.error })
        })
        this.setState({
          fireRedirect: true,
        })
    }*/
  
  render() {
    const { uploading, images } = this.state

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
                  />
                  <div className="btn-container">
                    <Button btnType="submit" btnText="Finished" />
                  </div>
                </>
                 )
        default:
          return (
            <>
            <UploadButton iconClass="icon" uploadSpan="Browse Files" onChange={this.onChange} />
            <Button btnType="submit" btnText="Submit"/>
            </>
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