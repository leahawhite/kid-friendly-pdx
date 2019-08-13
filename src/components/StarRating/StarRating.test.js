import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import StarRating from './StarRating';

describe('StarRating component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StarRating />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders half-filled stars when rating is fraction', () => {
    const wrapper = shallow(<StarRating rating='4.5'/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders filled stars when rating is whole number', () => {
    const wrapper = shallow(<StarRating rating='4.0'/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
});