import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from '../Header/Header'
import config from '../../config'
import PlacesApiService from '../../services/places-api-service'
import PrivateRoute from '../../routes/PrivateRoute'
import PublicOnlyRoute from '../../routes/PublicOnlyRoute'
import Footer from '../Footer/Footer'
import ErrorBoundary from '../ErrorBoundary'
import HomePage from '../../routes/HomePage/HomePage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import SignupPage from '../../routes/SignupPage/SignupPage'
import PlacesListPage from '../../routes/PlacesListPage/PlacesListPage'
import PlacePage from '../../routes/PlacePage/PlacePage'
import ReviewPage from '../../routes/ReviewPage/ReviewPage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage'
import TokenService from '../../services/token-service'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
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
      place: {},
      reviews: [],
      isLoading: false,
      error: null
    }
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return {
      hasError: true
    }
  }

  handleLogin = () => {
    this.setState({
      loggedIn: true
    })
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.setState({
      loggedIn: false
    })
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

  handleSubmit = event => {
    event.preventDefault();
    this.getPlaces();
  }

  getPlaces = () => {
    this.setState({
      isLoading: true
    })
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
    PlacesApiService.getPlaces(url)
      .then(data => {
        this.setState({
          places: data,
          isLoading: false,
        }, () => {
          this.props.history.push("/places")
        })
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  getPlaceReviews=placeId => {
    this.setState({
      isLoading: true
    })
    Promise.all([PlacesApiService.getById(placeId), PlacesApiService.getReviewsForPlace(placeId)])
      .then(([place, reviews]) => {
        this.setState({
          place: place,
          reviews: reviews,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({
          error: error
        })
      })
  }

  addReview=newReview => {
    this.setState({
      reviews: [...this.state.reviews, newReview]
    })
  }

  insertReviewsAndImages=(newReview, newImages) => {
    this.setState({ isLoading: true })
    Promise.all([PlacesApiService.postReview(newReview), PlacesApiService.postImages(newImages)])
      .then(([placesRes, imagesRes]) => {
        if (!placesRes.ok) {
          return placesRes.json().then(e => Promise.reject(e))
        }
        if (!imagesRes.ok) {
          return imagesRes.json().then(e => Promise.reject(e))
        }
        return Promise.all([placesRes.json(), imagesRes.json()])
      })
      .then(([newReview, newImages]) => {
        this.addReview(newReview)
      }, () => {
        this.props.history.push(`/places/${newReview.place_id}`)
      })
      .catch(res => {
        this.setState({
          error: res.error
        })
      })
  }

  render() {
    const {
      searchTerm,
      category,
      neighborhood,
      handleUpdateSearch,
      handleUpdateCategory,
      handleUpdateNeighborhood,
      handleSubmit,
      places,
      place,
      reviews,
      isLoading,
      error
    } = this.state

    return ( 
      <div className="App">
        <Header loggedIn={this.state.loggedIn} onLogout={this.handleLogout}/>
        <main className="App__main"> 
          {this.state.hasError && <p className='red'>Sorry, there was an error. Please try again.</p>} 
          <Switch>
            <Route exact path={'/'} render={props => 
              <ErrorBoundary>
                <HomePage 
                  searchTerm={searchTerm}
                  category={category}
                  neighborhood={neighborhood}
                  handleUpdateSearch={handleUpdateSearch}
                  handleUpdateCategory={handleUpdateCategory}
                  handleUpdateNeighborhood={handleUpdateNeighborhood}
                  handleSubmit={handleSubmit}
                  places={places}
                  isLoading={isLoading} 
                  {...props}
                /> 
              </ErrorBoundary>
            }/>  
            <PublicOnlyRoute path={'/login'} render={props => 
              <ErrorBoundary>
                <LoginPage 
                  loggedIn={this.state.loggedIn}
                  onLogin={this.handleLogin} 
                  {...props}
                /> 
              </ErrorBoundary>
            }/>   
            <PublicOnlyRoute path={'/signup'} render={props =>
              <ErrorBoundary>
                <SignupPage {...props} /> 
              </ErrorBoundary>
            }/> 
            <Route exact path={'/places'} render={props =>
              <ErrorBoundary>
                <PlacesListPage 
                  {...props}
                  searchTerm={searchTerm}
                  category={category}
                  neighborhood={neighborhood}
                  handleUpdateSearch={handleUpdateSearch}
                  handleUpdateCategory={handleUpdateCategory}
                  handleUpdateNeighborhood={handleUpdateNeighborhood}
                  handleSubmit={handleSubmit}
                  places={places}
                  isLoading={isLoading}
                  error={error}
                /> 
              </ErrorBoundary>
            }/>    
            <Route exact path={'/places/:placeId'} render={props =>
              <ErrorBoundary>
                <PlacePage 
                  {...props}
                  searchTerm={searchTerm}
                  category={category}
                  neighborhood={neighborhood}
                  handleUpdateSearch={handleUpdateSearch}
                  handleUpdateCategory={handleUpdateCategory}
                  handleUpdateNeighborhood={handleUpdateNeighborhood}
                  handleSubmit={handleSubmit}
                  places={places}
                  place={place}
                  reviews={reviews}
                  getPlaceReviews={this.getPlaceReviews}
                  isLoading={isLoading}
                  error={error}
                /> 
              </ErrorBoundary>
            }/> 
            <PrivateRoute path={'/places/:placeId/reviews'} render={props =>
              <ReviewPage 
                {...props}
                place={place}
                insertReviewsAndImages={this.insertReviewsAndImages}
                error={error}
              />
            }/>
            <Route render={props =>
              <ErrorBoundary>
                <NotFoundPage {...props} /> 
              </ErrorBoundary>
            }/>   
          </Switch> 
        </main> 
        <footer className="Footer" role="contentinfo">
          <Footer />
        </footer> 
      </div>
    )
  }
}

export default withRouter(App);