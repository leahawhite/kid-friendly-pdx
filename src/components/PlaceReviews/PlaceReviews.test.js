import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceReviews from './PlaceReviews';
import { testPlace, testReviews } from '../../helpers/helpers';

describe('PlaceReviews component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PlaceReviews />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceReviews place={testPlace} reviews={testReviews} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})