import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewPage from './ReviewPage'

describe('ReviewPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ReviewPage />
      </MemoryRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(
      <MemoryRouter>
        <ReviewPage />
      </MemoryRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})


