import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './Button'

describe.only('Button component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders empty without props', () => {
    const wrapper = shallow(<Button />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders type and text given props', () => {
    const wrapper = shallow(<Button btnType="submit" btnText="Submit" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
