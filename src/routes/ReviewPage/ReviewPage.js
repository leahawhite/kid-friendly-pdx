import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlacesApiService from '../../services/places-api-service'
import Spinner from '../../components/Spinner/Spinner'
import ValidationError from '../../components/ValidationError/ValidationError'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './ReviewPage.css'

export default class ReviewPage extends Component {
  static defaultProps = {
    place: {},
    insertReviewsAndImages: () => {}
  }

  state = {
    place: this.props.place || {},
    isLoading: false
  }

  componentDidMount() {
    const placeId = this.props.match.params.placeId
    if (!this.props.place.length) {
      this.setState({ isLoading: true })
      PlacesApiService.getById(placeId)
      .then(place => {
        this.setState({
          place,
          isLoading: false,
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })
    }
  }
  render() {
    const { insertReviewsAndImages, error } = this.props
    const { place, isLoading } = this.state
    if (error) {
      return <ValidationError hasError={error} />
    } else if (isLoading) {
      return <Spinner />
    }
    return (
      <div className="ReviewPage">
        <h2 className="ReviewPage-header">Write a Review of{' '}
          <Link to={{
                    pathname: `/places/${place.id}`,
                    state: { place: place }
                    }}>
            {place.name}
          </Link>
        </h2>
        <ReviewForm place={place} insertReviewsAndImages={insertReviewsAndImages} error={error} />
      </div>
    )
  }
}