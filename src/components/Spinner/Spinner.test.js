import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Spinner from './Spinner';

describe.only('Spinner component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spinner />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<Spinner />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})