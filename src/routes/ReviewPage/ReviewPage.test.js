import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ReviewPage from './ReviewPage'
import { testPlace } from '../../helpers/helpers';

describe('ReviewPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ReviewPage match={{params: {placeId: 1}}} location={{state: {place: testPlace}}}/>
      </MemoryRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<ReviewPage match={{params: {placeId: 1}}} location={{state: {place: testPlace}}}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})


