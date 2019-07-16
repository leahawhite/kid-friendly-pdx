import React, { Component } from 'react'

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

export class SearchProvider extends Component {
  state = {
    searchTerm: '',
    category: 'all',
    neighborhood: 'All Portland',
    error: null,
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true })
    this.getPlaces()
  }  

  handleUpdateSearch = term => {
    this.setState({
      searchTerm: term
    })
  }

  handleUpdateCategory = option => {
    this.setState({
      category: option
    })
  }

  handleUpdateNeighborhood = option => {
    this.setState({
      neighborhood: option
    })
  }
  
  render() {
    const value = {
      searchTerm: this.state.searchTerm,
      category: this.state.category,
      neighborhood: this.state.neighborhood,
      error: this.state.error,
      handleSubmit: this.handleSubmit,
      handleUpdateSearch: this.handleUpdateSearch,
      handleUpdateCategory: this.handleUpdateCategory,
      handleUpdateNeighborhood: this.handleUpdateNeighborhood,
    }
    return (
      <SearchContext.Provider value={value}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}
