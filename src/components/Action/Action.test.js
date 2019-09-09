import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Action from './Action'

describe('Action component', () => {
  it('renders the UI given props', () => {
    const wrapper = shallow(<Action name="phone" link="tel:+1-555-2222" icon="phone" text="Call" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
