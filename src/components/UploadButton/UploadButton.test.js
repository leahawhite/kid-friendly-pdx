import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import UploadButton from './UploadButton';

describe('UploadButton component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UploadButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<UploadButton />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders className as expected', () => {
    const wrapper = shallow(<UploadButton iconClass="upload" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
  it('renders text as expected', () => {
    const wrapper = shallow(<UploadButton uploadSpan="Browse Files" />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})