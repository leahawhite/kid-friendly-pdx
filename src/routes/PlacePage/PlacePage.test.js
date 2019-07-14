import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PlacePage from './PlacePage'

describe.skip('PlacePage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <PlacePage />
      </BrowserRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<PlacePage />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
