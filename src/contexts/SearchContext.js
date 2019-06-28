import React from 'react'

const SearchContext = React.createContext({
  searchTerm: '',
  category: 'all',
  neighborhood: 'All Portland',
  handleUpdateSearch: () => {},
  handleUpdateNeighborhood: () => {},
  handleUpdateCategory: () => {},
  handleSubmit: () => {},
})

export default SearchContext