import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import './ReviewPage.css';

export default class ReviewPage extends Component {
  render() {
    return (
      <>
        <h2 class="form-header">Write a Review of <Link to='/places/:placeId'>This Place</Link></h2>
        <ReviewForm />
      </>
    )
  }
}