import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Action from './Action';

describe('Action component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Action />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders empty without props', () => {
    const wrapper = shallow(<Action />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders the UI given props', () => {
    const wrapper = shallow(<Action name="phone" link="tel:+1-555-2222" icon="phone" text="Call" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
