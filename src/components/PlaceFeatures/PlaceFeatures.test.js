import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceFeatures from './PlaceFeatures';
import { testPlace } from '../../helpers/helpers';

describe('PlaceFeatures component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlaceFeatures />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceFeatures place={testPlace} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})