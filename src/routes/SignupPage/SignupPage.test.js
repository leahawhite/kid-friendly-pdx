import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SignupPage from './SignupPage'

describe('SignupPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignupPage />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<SignupPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
