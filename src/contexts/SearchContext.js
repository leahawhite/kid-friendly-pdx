import React from 'react'

const SearchContext = React.createContext({
  searchTerm: '',
  category: 'all',
  neighborhood: 'All Portland',
  fireRedirect: '',
  places: [],
  handleUpdateSearch: () => {},
  handleUpdateNeighborhood: () => {},
  handleUpdateCategory: () => {},
  handleSubmit: () => {},
  getPlaces: () => {}
})

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;