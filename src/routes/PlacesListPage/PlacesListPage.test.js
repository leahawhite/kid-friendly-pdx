import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PlacesListPage from './PlacesListPage'

describe('PlacesListPage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PlacesListPage />
      </MemoryRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<MemoryRouter><PlacesListPage /></MemoryRouter>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
