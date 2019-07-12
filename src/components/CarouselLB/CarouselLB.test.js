import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CarouselLB from './CarouselLB';

describe('CarouselLB component', () => {
  const images = [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/ir83SjI1lJpHK4E5vQFwD7LfyE__eKaIvBtmFf1nV5wyfq-z5LVe4u7PuQvQ7ycqsFlGMe5vw3UNRB86G3SjLckIZKHgFSkz0-oQdLAAP2UxlUwq-HqDA116RjcI3iG-lA1ftsYr9S4=w2400',
      title: `Atlas Pizza's 'Jalapeno Popper' pie`,
      place_id: 1,
      user_id: 2,
      review_id: 1,
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/CjUvS4WgCiSRTsUUAryiPcczqAdyaSDhDg1ZTT6OrdgjfdNiTE5Q14pwI-C2m49tSjQHMnBxDgpiZyYZkxEDE3KzI3DWLsT631ROrF1zTuJcBqEXcRN8PP5U3EcG-bmMclE_uKmWh2E=w2400',
      title: 'A rainbow over Foster Blvd',
      place_id: 1,
      user_id: 1,
      review_id: 2,
    },
  ]
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CarouselLB />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders empty without props', () => {
    const wrapper = shallow(<CarouselLB />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders the images given props', () => {
    const wrapper = shallow(<CarouselLB {...images} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
