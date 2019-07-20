import React from 'react'

const SearchContext = React.createContext({
  searchTerm: '',
  category: '',
  neighborhood: '',
  fireRedirect: '',
  places: [],
  place: {},
  handleUpdateSearch: () => {},
  handleUpdateNeighborhood: () => {},
  handleUpdateCategory: () => {},
  handleSubmit: () => {},
})

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;