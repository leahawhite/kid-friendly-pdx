import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupForm from './SignupForm';

describe('MapContainer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SignupForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<SignupForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})