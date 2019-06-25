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
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { images } = this.props;
    
    return (
      <div>
        <button type="button" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </button>
 
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