import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import './CarouselLB.css';
 
export default class CarouselLB extends Component {
  static defaultProps = {
    images: [],
  }
  constructor(props) {
    super(props);
    this.state = {
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
    const imageList = images.map((image, index) => (
      <div id='image' className={imagesClass} key={index} onClick={this.handleImageClick.bind(this, index)}>
        <img src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
      ), this)
    
    return (
      <div className="image-row">
        {imageList}
        
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