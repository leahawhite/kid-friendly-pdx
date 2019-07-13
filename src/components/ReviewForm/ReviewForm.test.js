import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ReviewForm from './ReviewForm';

describe('ReviewForm component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ReviewForm />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<ReviewForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
  
