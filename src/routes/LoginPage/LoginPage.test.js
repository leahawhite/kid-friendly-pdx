import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LoginPage from './LoginPage'

describe('LoginPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<LoginPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
