import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import data from '../../data';
import 'react-image-lightbox/style.css'; 
import './CarouselLB.css';
 
export default class LightboxExample extends Component {
  static defaultProps = {
    images: [],
  }
  
  constructor(props) {
    super(props);
    this.state = {
      users: data.users,
      photoIndex: 0,
      isOpen: false,
    };
  }

  handleImageClick(index, event) {
    this.setState({ photoIndex: index })
    this.setState({ isOpen: true })
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { images, imagesClass } = this.props;
    const imageList1 = images.slice(0, 1).map((image, index) => (
      <div id='image-1' className={imagesClass} key={index} onClick={this.handleImageClick.bind(this, index)}>
        <img src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
    ), this)
    const imageList2 = images.slice(0, 2).map((image, index) => (
      <div id='image-2' className={imagesClass} key={index} onClick={this.handleImageClick.bind(this, index)}>
        <img src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
    ), this)
    const imageList3 = images.slice(0, 3).map((image, index) => (
      <div id='image-3' className={imagesClass} key={index} onClick={this.handleImageClick.bind(this, index)}>
        <img src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
    ), this)
    const imageList4 = images.slice(0, 4).map((image, index) => (
      <div id='image-4' className={imagesClass} key={index} onClick={this.handleImageClick.bind(this, index)}>
        <img src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
    ), this)
    
    return (
      <div className="image-row">
        {imageList1}
        {imageList2}
        {imageList3}
        {imageList4}
 
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
            imageCaption={images[photoIndex].title}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}