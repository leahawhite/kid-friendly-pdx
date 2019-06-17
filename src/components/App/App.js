import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
// import SearchLayout from '../SearchLayout/SearchLayout';
import Footer from '../Footer/Footer';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import PlacesListPage from '../../routes/PlacesListPage/PlacesListPage';
// import PlacePage from '../../routes/PlacePage/PlacePage';
// import ReviewPage from '../../routes/ReviewPage/ReviewPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import SearchContext from '../../contexts/SearchContext';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false,
      places: [],
      searchTerm: '',
      category: 'all',
      neighborhood: 'SE',
      handleSubmit: this.handleSubmit,
      handleSearchChange: this.handleSearchChange,
      handleCategoryChange: this.handleCategoryChange,
      handleNeighborhoodChange: this.handleNeighborhoodChange,
      fireRedirect: false,
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ fireRedirect: true })
  }  
    
  handleSearchChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleCategoryChange = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleNeighborhoodChange = event => {
    this.setState({
      neighborhood: event.target.value
    })
  }

  render() {
    const value = {
      places: this.state.places,
      searchTerm: this.state.searchTerm,
      category: this.state.category,
      neighborhood: this.state.neighborhood,
      handleSubmit: this.state.handleSubmit,
      handleSearchChange: this.state.handleSearchChange,
      handleCategoryChange: this.state.handleCategoryChange,
      handleNeighborhoodChange: this.state.handleNeighborhoodChange,
      fireRedirect: this.state.fireRedirect
    }

    return (
        <div className="App">
          <Header />
          <SearchContext.Provider value={value}>
            <main className="App__main">
              {this.state.hasError && <p className='red'>Sorry, there was an error. Please try again.</p>}
              <Switch>
                <Route exact path={'/'} component={HomePage} /> 
                <Route path={'/login'} component={LoginPage} />
                <Route path={'/signup'} component={SignupPage} />
                <Route path={'/places'} component={PlacesListPage} /> 
                {/* <Route path={'/places/:placeId'} component={PlacePage} /> */}
                {/* <Route path={'/places/:placeId/reviews'} component={ReviewPage} /> */}
                <Route component={NotFoundPage} />
              </Switch>
            </main>
          </SearchContext.Provider>
          <footer className="Footer" role="contentinfo">
            <Footer />
          </footer>
        </div>
    )
  }
}