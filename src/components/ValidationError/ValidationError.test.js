import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ValidationError from './ValidationError';

describe('ValidationError component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ValidationError />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<ValidationError />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})