import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceMap from './PlaceMap';
import { testPlace } from '../../helpers/helpers';

describe('PlaceMap component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlaceMap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceMap place={testPlace} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})