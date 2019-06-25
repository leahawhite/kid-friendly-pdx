import React, { Component } from 'react';
import data from '../../data';
import './Carousel.css';

export default class Carousel extends Component {
  static defaultProps = {
    images: [],
  }

  constructor (props) {
    super(props);
    this.state = {
      activeIndex: 0,
      users: data.users
    };
  }

  previousSlide = () => {
    const { images } = this.props
    const lastIndex = images.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === 0;
    const index = shouldResetIndex ? lastIndex : activeIndex - 1;

    this.setState({
      activeIndex: index
    })
  }

  nextSlide = () => {
    const { images } = this.props
    const lastIndex = images.length - 1;
    const { activeIndex } = this.state;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;

    this.setState({
      activeIndex: index
    })
  }
  
  render() {
    const { images } = this.props
    const { users, activeIndex } = this.state
    const image = images[activeIndex]
    let username
    if (image.userId) {
      const userId = image.user_id
      const imageUser = users.find(user => user.id === userId)
      username = imageUser.display_name
    }
    username = "photo provided by business"
    
    return (
      <div className="carousel">
        <Arrow 
          direction="left"
          clickFunction={this.previousSlide}
          glyph="&#9664;" />

        <ImageSlide image={image} username={username}  />
        
        <Arrow 
          direction="right"
          clickFunction={this.nextSlide}
          glyph="&#9654;" />
      </div>
    )
  }
}

const ImageSlide = ({ image, username }) => {
  /*const styles = {
		backgroundImage: `url(${image.src})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center'
  };*/
  
  return (
    <div className="image-slide">
      <img className="image-item" src={image.src} alt={image.title}></img>
      <div className="image-caption">
        <h3>{image.title}</h3>
        <p>{'- '}{username}</p>
      </div>
    </div>
  )
}
	
const Arrow = ({ direction, clickFunction, glyph }) => (
  <div
    className={ `slide-arrow ${direction}`}
    onClick={ clickFunction }>
    { glyph }
  </div>
)
