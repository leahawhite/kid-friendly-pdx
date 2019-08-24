import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SearchBar from './SearchBar';

describe('MapContainer component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<SearchBar />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})