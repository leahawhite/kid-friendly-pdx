import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Review from './Review';

const testReview = { 
  id: 1,
  star_rating: 5,
  text: "Atlas is our new favorite spot for a quick, painless dinner with our toddler. It's super casual -- order slices or pies at the counter, and they call your name for pickup when it's ready. Since it's new, the play area is pretty clean and well-stocked. There's an old church pew there for parents to sit and supervise, but the open floor plan means that you can see the play area from pretty much every table. We've only ordered slices, so we've never had to wait long. We're usually in and out in 30 minutes, which is just about perfect for us.",
  date_created: "2019-06-13",
  place_id: 1,
  user_id: 5,
  images: [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/QDwk6G6ZCwYzVH-yJHQ824GZ1wKW2XXus8hxxdH-4AAHz-FejC-UVydyE5le1ZvPTIo1cXw1G25qhljwS8dgyIedCCFtIxBonznVQ4LfaPDEZVWmqKS1vFqVUFFNmMmMlKQ5eCpfhNI=w2400',
      title: `Atlas Pizza's play area`,
      place_id: 1,
      user_id: 5,
    },
  ]
};

describe('Review component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Review />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected with props', () => {
    const wrapper = shallow(<Review review={testReview} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})