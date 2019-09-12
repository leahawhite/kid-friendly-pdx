import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import TokenService from '../services/token-service'

export default function PublicOnlyRoute({ component: Component = null, render: Render = null, ...rest }) {
  return ( 
    <Route {...rest} render={props => (
        TokenService.hasAuthToken() ? (
          <Redirect to={'/'}/> ) : (
            Render ? (
              Render(props)
            ) : Component ? (
              <Component {...props} />
            ) : null
          )
      )}
    />
  )
}