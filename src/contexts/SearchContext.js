import React from 'react';

const SearchContext = React.createContext({
  places: [],
  searchTerm: "",
  category: 'all',
  neighborhood: 'SE',
  handleSearchChange: () => {},
  handleCategoryChange: () => {},
  handleNeighborhoodChange: () => {},
  handleSubmit: () => {},
  fireRedirect: false,
})

export default SearchContext


