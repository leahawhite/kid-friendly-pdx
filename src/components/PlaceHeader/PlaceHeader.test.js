import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceHeader from './PlaceHeader';
import { testPlace } from '../../helpers/helpers';

describe('PlaceHeader component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PlaceHeader />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceHeader place={testPlace} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})