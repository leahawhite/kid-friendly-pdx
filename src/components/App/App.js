import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header';
import PrivateRoute from '../Utils/PrivateRoute'
import PublicOnlyRoute from '../Utils/PublicOnlyRoute'
import Footer from '../Footer/Footer';
import ErrorBoundary from '../ErrorBoundary';
import HomePage from '../../routes/HomePage/HomePage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import SignupPage from '../../routes/SignupPage/SignupPage';
import PlacesListPage from '../../routes/PlacesListPage/PlacesListPage';
import PlacePage from '../../routes/PlacePage/PlacePage';
import ReviewPage from '../../routes/ReviewPage/ReviewPage';
import PhotoUploadPage from '../../routes/PhotoUploadPage/PhotoUploadPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import TokenService from '../../services/token-service';
import { Provider } from '../../contexts/SearchContext';
import config from '../../config';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      loggedIn: TokenService.getAuthToken(),
      searchTerm: '',
      category: '',
      neighborhood: '',
      handleSubmit: this.handleSubmit,
      handleUpdateSearch: this.handleUpdateSearch,
      handleUpdateCategory: this.handleUpdateCategory,
      handleUpdateNeighborhood: this.handleUpdateNeighborhood,
      places: [],
      error: null,
      fireRedirect: false,
    }
  }

  handleLogin = () => {
    this.setState({ loggedIn: true })
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.setState({ loggedIn: false })
  }

  getPlaces = () => {
    const { searchTerm, category, neighborhood } = this.state
    const params = []
    if (searchTerm) {
      params.push(`searchTerm=${encodeURI(searchTerm)}`)
    }
    if (category) {
      params.push(`category=${encodeURI(category)}`)
    }
    if (neighborhood) {
      params.push(`neighborhood=${encodeURI(neighborhood)}`)
    }
    const query = params.join('&')
    const url = `${config.API_ENDPOINT}/places/?${query}`
        
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(data => {
        this.setState({
          places: data,
          isLoading: false,
          error: null,
          fireRedirect: true,
        })
      })
      .catch(err => {
        // this makes a duplicate of the message I have in renderPlaces
        this.setState({
          error: 'Sorry, could not retrieve any results at this time.'
        })
      })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ isLoading: true })
    this.getPlaces()
  }  

  handleUpdateSearch = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleUpdateCategory = event => {
    this.setState({
      category: event.target.value
    })
  }

  handleUpdateNeighborhood = event => {
    this.setState({
      neighborhood: event.target.value
    })
  }
  
  render() {
    
    return (
      <Provider value={this.state} >
      <div className="App">
        <Header loggedIn={this.state.loggedIn} onLogout={this.handleLogout}/>
          <main className="App__main">
            {this.state.hasError && <p className='red'>Sorry, there was an error. Please try again.</p>}
            <Switch>
              <Route exact path={'/'} render={props =>
                <ErrorBoundary>
                  <HomePage {...props} />
                </ErrorBoundary>
              }/>  
              <PublicOnlyRoute 
                path={'/login'} 
                component={props =>
                <ErrorBoundary>
                  <LoginPage loggedIn={this.state.loggedIn} onLogin={this.handleLogin} {...props}/>
                </ErrorBoundary>
              }/>  
              <PublicOnlyRoute path={'/signup'} component={props =>
                <ErrorBoundary>
                  <SignupPage {...props}/>
                </ErrorBoundary>
              }/>
              <Route exact path={'/places'} render={props =>
                <ErrorBoundary>
                  <PlacesListPage {...props} />
                </ErrorBoundary>
              }/>    
              <Route exact path={'/places/:placeId'} render={props =>
                <ErrorBoundary>
                  <PlacePage {...props} />
                </ErrorBoundary>
              }/>  
              <PrivateRoute 
                path={'/places/:placeId/reviews'} 
                component={ReviewPage}
              />
              <Route path={'/images/upload'} render={props =>
                <ErrorBoundary>
                  <PhotoUploadPage {...props}/>
                </ErrorBoundary>
              }/>    
              <Route render={props =>
                <ErrorBoundary>
                  <NotFoundPage {...props}/>
                </ErrorBoundary>
              }/>  
            </Switch>
          </main>
        <footer className="Footer" role="contentinfo">
          <Footer />
        </footer>
      </div>
      </Provider>
    )
  }
}