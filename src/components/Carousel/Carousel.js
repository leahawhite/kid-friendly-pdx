import React, { Component } from 'react'
import InfiniteCarousel from 'react-leaf-carousel'
import './Carousel.css'
 
export default class Carousel extends Component {
  render() {
    const { images } = this.props
    const imageList = images.length && images.map(image =>
      <div className="image-item" key={image.id} >
        <img className="place-img" src={image.src} alt={image.title}/>
        <div className="overlay">{image.title}</div>
      </div>
      )
    return (
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesSpacing={.5}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        {imageList}  
      </InfiniteCarousel>  
    )
  }
}

Carousel.defaultProps = {
  images: []
}

  
    
    
    