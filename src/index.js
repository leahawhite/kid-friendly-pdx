import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import App from './components/App/App';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

import {
  faSearch,
  faStar as fasStar,
  faStarHalfAlt,
  faCompass,
  faMapMarkerAlt,
  faClock,
  faDirections,
  faPhone,
  faPen,
  faChild,
  faCircle,
  faCamera,
  faGlobe,
  faConciergeBell,
  faBan,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faSearch,
  farStar,
  fasStar,
  faStarHalfAlt,
  faMapMarkerAlt,
  faCompass,
  faDirections,
  faClock,
  faPhone,
  faCamera,
  faCircle,
  faPen,
  faChild,
  faGlobe,
  faConciergeBell,
  faBan,
  faPlusCircle
)

ReactDOM.render(
  <BrowserRouter>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>, document.getElementById('root'));
