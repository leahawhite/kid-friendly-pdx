import React, { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Place from '../../components/Place/Place';
import './PlacePage.css';

export default class PlacePage extends Component {
  render() {
    return (
      <>
        <SearchBar />
        <section class="places-item">
          <Place />
        </section>
      </>
    )
  }
}