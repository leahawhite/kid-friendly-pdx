import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { testPlace } from '../../helpers/helpers'
import PlacesListPage from './PlacesListPage'

describe('PlacesListPage component', () => {
  const searchTerm = 'pizza'
  const category = ''
  const neighborhood = ''
  const places = [testPlace]
  const handleSubmit = jest.fn()
  const handleUpdateCategory = jest.fn()
  const handleUpdateNeighborhood = jest.fn()
  const handleUpdateSearch = jest.fn()
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <PlacesListPage
          searchTerm={searchTerm}
          category={category}
          neighborhood={neighborhood}
          handleUpdateSearch={handleUpdateSearch}
          handleUpdateCategory={handleUpdateCategory}
          handleUpdateNeighborhood={handleUpdateNeighborhood}
          handleSubmit={handleSubmit}
          places={places} />
      </MemoryRouter>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders UI as expected', () => {
    const wrapper = shallow(<PlacesListPage
      searchTerm={searchTerm}
      category={category}
      neighborhood={neighborhood}
      handleUpdateSearch={handleUpdateSearch}
      handleUpdateCategory={handleUpdateCategory}
      handleUpdateNeighborhood={handleUpdateNeighborhood}
      handleSubmit={handleSubmit}
      places={places}
    />)
    expect(toJson(wrapper)).toMatchSnapshot()
  });
})
