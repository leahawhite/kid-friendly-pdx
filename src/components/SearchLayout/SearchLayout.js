import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import { Redirect } from 'react-router-dom';

export default class SearchLayout extends Component {
  constructor() {
    super();
    this.state = { results: [] };
  }

  handleSubmit = value => {
    fetch(`someurltofetchfrom/${value}`)
      .then(response => response.json())
      .then(results => {
        this.setState({ results });
      })
      .catch(error => console.error(error));
  };
  
  render() {
    return (
      <>
        <SearchBar handleSubmit={this.handleSubmit}/>
          {this.props.children}
          {this.state.results.length ? (
            <Redirect 
              to={{
                pathname: "/PlacesListPage",
                state: { results: this.state.results }
              }}
            />
          ) : null}
      </>
    )
  }
}