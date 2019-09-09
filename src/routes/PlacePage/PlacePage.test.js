import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlacePage from './PlacePage';
import { testPlace } from '../../helpers/helpers';


describe('PlacePage component', () => {
  const getPlaceReviews = jest.fn()
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PlacePage getPlaceReviews={getPlaceReviews} match={{params: {placeId: 1}}}  />
      </MemoryRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<PlacePage getPlaceReviews={getPlaceReviews} place={testPlace} match={{params: {placeId: 1}}}  />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
