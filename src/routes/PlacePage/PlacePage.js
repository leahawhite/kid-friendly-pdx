import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Carousel from '../../components/Carousel/Carousel'
import PlaceHeader from '../../components/PlaceHeader/PlaceHeader'
import PlaceActions from '../../components/PlaceActions/PlaceActions'
import PlaceMap from '../../components/PlaceMap/PlaceMap'
import PlaceHours from '../../components/PlaceHours/PlaceHours'
import PlaceFeatures from '../../components/PlaceFeatures/PlaceFeatures'
import PlaceReviews from '../../components/PlaceReviews/PlaceReviews'
import Spinner from '../../components/Spinner/Spinner'
import './PlacePage.css'

export default class PlacePage extends Component {
  static defaultProps = {
    match: { params: {} },
    place: {},
    reviews: [],
  }
  
  componentDidMount() {
    const { placeId } = this.props.match.params
    this.props.getPlaceReviews(placeId)
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
      isLoading,
      place,
      reviews,
      error } = this.props
    const placeImages = place && place.images
    if (isLoading) {
      return (
        <div className="place-page">
          <Spinner />
        </div>
      )
    } 
      return (
        <>
        <SearchBar 
          searchTerm={searchTerm}
          category={category}
          neighborhood={neighborhood}
          handleUpdateSearch={handleUpdateSearch}
          handleUpdateCategory={handleUpdateCategory}
          handleUpdateNeighborhood={handleUpdateNeighborhood}
          handleSubmit={handleSubmit}/>
        <div role="alert">
          {error && <p className="error">{error}</p>}
        </div>
        <div className="place-page">
          <section className="place-images-container">
            <Carousel images={placeImages} imagesClass="image-item" />
          </section>
          <PlaceHeader place={place} reviews={reviews} />
          <PlaceActions place={place} reviews={reviews} />
          <section className="place-addl-info">
            <PlaceMap place={place} />
            <PlaceHours place={place} />
            <PlaceFeatures place={place} />
            <PlaceReviews place={place} reviews={reviews} />
          </section>
        </div>
        </>
      )
  }
}


