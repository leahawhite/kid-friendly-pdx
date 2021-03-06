import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PlacesListItem from './PlacesListItem';

const place = {
  id: 1,
  name: "Atlas Pizza",
  address: "6529 SE Foster Rd",
  city: "Portland",
  state: "OR",
  zipcode: "97206",
  lat: 45.489200,
  lng: -122.595070,
  neighborhood: "SE",
  phone: "503-232-3004",
  website: "http://atlaspizzapdx.com",
  hours: [
    {
      "dayOfWeek": "Monday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Tuesday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Wednesday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Thursday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
    {
      "dayOfWeek": "Friday",
      "opens": "12:00 pm",
      "closes": "12:00 am",
    },
    {
      "dayOfWeek": "Saturday",
      "opens": "12:00 pm",
      "closes": "12:00 am",
    },
    {
      "dayOfWeek": "Sunday",
      "opens": "12:00 pm",
      "closes": "11:00 pm",
    },
  ],
  date_created: "2019-06-13",
  category: ["restaurants",],
  descriptors: [ "pizza", "arcade", "beer" ],
  features: { 
    "toys": true, 
    "play area": true, 
    "arcade": true,
    "quick service": true,
    "all ages": true,
    "comfortable seating": true,
    "friendly staff": true,
    "kids menu": false,
    "highchairs/boosters": false,
    "changing station": false,
    "flexible": true,
    "patio/sidewalk": true,
  },
  images: [
    {
      id: 1,
      src: 'https://lh3.googleusercontent.com/ir83SjI1lJpHK4E5vQFwD7LfyE__eKaIvBtmFf1nV5wyfq-z5LVe4u7PuQvQ7ycqsFlGMe5vw3UNRB86G3SjLckIZKHgFSkz0-oQdLAAP2UxlUwq-HqDA116RjcI3iG-lA1ftsYr9S4=w2400',
      title: `Atlas Pizza's 'Jalapeno Popper' pie`,
      place_id: 1,
      user_id: 2,
      review_id: 1,
    },
    {
      id: 2,
      src: 'https://lh3.googleusercontent.com/CjUvS4WgCiSRTsUUAryiPcczqAdyaSDhDg1ZTT6OrdgjfdNiTE5Q14pwI-C2m49tSjQHMnBxDgpiZyYZkxEDE3KzI3DWLsT631ROrF1zTuJcBqEXcRN8PP5U3EcG-bmMclE_uKmWh2E=w2400',
      title: 'A rainbow over Foster Blvd',
      place_id: 1,
      user_id: 1,
      review_id: 2,
    },
  ],
  number_of_reviews: 2,
  average_review_rating: 4.5,
};

describe('PlaceListItem component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PlacesListItem />
      </MemoryRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<PlacesListItem place={place}/>)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})