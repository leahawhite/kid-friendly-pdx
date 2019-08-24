import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'
import './PlaceHours.css'

export default class PlaceHours extends Component {
  static defaultProps = {
    place: {}
  }

  getStdTime(hours) {
    return moment(hours, 'hh:mm a').format('hh:mm a')
  }

  render() {
    const { place } = this.props || {}
    // converting dayOfWeek value to text equivalent
    const newPlaceHours = place && place.hours && place.hours.length && place.hours.map(day => { 
      let returnValue = {...day}
      if (day.dayOfWeek === 1) {
        returnValue.dayOfWeek = "Monday";
      }
      if (day.dayOfWeek === 2) {
        returnValue.dayOfWeek = "Tuesday";
      }
      if (day.dayOfWeek === 3) {
        returnValue.dayOfWeek = "Wednesday";
      }
      if (day.dayOfWeek === 4) {
        returnValue.dayOfWeek = "Thursday";
      }
      if (day.dayOfWeek === 5) {
        returnValue.dayOfWeek = "Friday";
      }
      if (day.dayOfWeek === 6) {
        returnValue.dayOfWeek = "Saturday";
      }
      if (day.dayOfWeek === 7) {
        returnValue.dayOfWeek = "Sunday";
      }
      return returnValue
    })
   
    const hoursArr = newPlaceHours && newPlaceHours.length && newPlaceHours.map((item, index) =>
      <table className="place-hours-table" key={index}>
        <tbody>
          <tr className="place-hours-table-row">
            <th className="place-hours-table-column-left">{item.dayOfWeek}{': '}</th>
            <td className="place-hours-table-column-right">{this.getStdTime(item.opens)}{' - '}{this.getStdTime(item.closes)}</td>
          </tr>
        </tbody>
      </table>  
    );
    return (
      <div className="place-hours">
        <div className="place-hours-icon">
          <FontAwesomeIcon icon="clock" size="lg" />
        </div>
        <div className="place-hours-content">
          {hoursArr}
        </div>
      </div>
    )
  }
}