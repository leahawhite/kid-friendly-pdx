import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceHours from './PlaceHours';
import { testPlace } from '../../helpers/helpers';

describe('PlaceHours component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlaceHours />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceHours place={testPlace} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})