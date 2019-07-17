import React from 'react';
import { Route } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'

export default function SearchLayout({component: Component, ...rest}) {
    
  return (
    <Route {...rest} render={(props) => (
      <>
        <SearchBar
          //searchTerm={props.searchTerm}
          //category={props.category}
          //neighborhood={props.neighborhood}
          //isLoading={props.isLoading}
          //error={props.error}
          //fireRedirect={props.fireRedirect}
          //onSubmit={props.onSubmit}
         // updateSearch={props.updateSearch}
         // updateCategory={props.updateCategory}
         // updateNeighborhood={props.updateNeighborhood}
         // places={props.places}
        />
        <Component {...props} />
      </>
    )} />
  )
} 