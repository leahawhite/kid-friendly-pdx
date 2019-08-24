import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlaceActions from './PlaceActions';
import { testPlace } from '../../helpers/helpers';

describe('PlaceActions component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PlaceActions />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<PlaceActions place={testPlace} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})