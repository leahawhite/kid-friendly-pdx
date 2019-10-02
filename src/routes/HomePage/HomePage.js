import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import Spinner from '../../components/Spinner/Spinner'
import './HomePage.css'

export default class HomePage extends Component {
  
  render() {
    const { 
      searchTerm, 
      category, 
      neighborhood, 
      handleUpdateSearch, 
      handleUpdateCategory, 
      handleUpdateNeighborhood, 
      handleSubmit,
      isLoading } = this.props

    if (isLoading) {
      return <Spinner />
    }
    return (
        <div className="hero">
          <header role="banner">
            <h1 className="app-title"><Link to='/'>Kid-Friendly PDX</Link></h1>
            <p>Find the most welcoming spots in town.</p>
          </header>
          <SearchBar 
            searchTerm={searchTerm}
            category={category}
            neighborhood={neighborhood}
            handleUpdateSearch={handleUpdateSearch}
            handleUpdateCategory={handleUpdateCategory}
            handleUpdateNeighborhood={handleUpdateNeighborhood}
            handleSubmit={handleSubmit}
          />
        </div>  
    )
  }
}