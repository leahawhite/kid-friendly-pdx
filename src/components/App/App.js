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
import TokenService from '../../services/token-service'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      loggedIn: TokenService.getAuthToken(),
    }
  }

  handleLogin = () => {
    this.setState({ loggedIn: true })
  }

  handleLogout = () => {
    TokenService.clearAuthToken()
    this.setState({ loggedIn: false })
  }
  
  render() {
    
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} onLogout={this.handleLogout}/>
          <main className="App__main">
            {this.state.hasError && <p className='red'>Sorry, there was an error. Please try again.</p>}
            <Switch>
              <Route exact path={'/'} render={props =>
                <ErrorBoundary>
                  <HomePage {...props}/>
                </ErrorBoundary>
              }/>  
              <PublicOnlyRoute 
                path={'/login'} 
                component={props =>
                <ErrorBoundary>
                  <LoginPage  loggedIn={this.state.loggedIn} onLogin={this.handleLogin} {...props}/>
                </ErrorBoundary>
              }/>  
              <PublicOnlyRoute path={'/signup'} component={props =>
                <ErrorBoundary>
                  <SignupPage {...props}/>
                </ErrorBoundary>
              }/>
              <Route exact path={'/places'} render={props =>
                <ErrorBoundary>
                  <PlacesListPage {...props}/>
                </ErrorBoundary>
              }/>  
              <Route exact path={'/places/:placeId'} render={props =>
                <ErrorBoundary>
                  <PlacePage {...props}/>
                </ErrorBoundary>
              }/>  
              <PrivateRoute 
                path={'/places/:placeId/reviews'} 
                component={ReviewPage}/>
              <Route path={'/image-upload'} render={props =>
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
    )
  }
}