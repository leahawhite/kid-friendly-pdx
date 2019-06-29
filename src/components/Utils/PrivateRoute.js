import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../../services/token-service'

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => 
        TokenService.hasAuthToken()
          ? <Component {...props} />
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
      }
    />
  )
}
