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
    // converting day_id value to text equivalent
    const newPlaceHours = place && place.hours && place.hours.length && place.hours.map(day => { 
      let returnValue = {...day}
      if (day.day_id === 1) {
        returnValue.day_id = "Monday";
      }
      if (day.day_id === 2) {
        returnValue.day_id = "Tuesday";
      }
      if (day.day_id === 3) {
        returnValue.day_id = "Wednesday";
      }
      if (day.day_id === 4) {
        returnValue.day_id = "Thursday";
      }
      if (day.day_id === 5) {
        returnValue.day_id = "Friday";
      }
      if (day.day_id === 6) {
        returnValue.day_id = "Saturday";
      }
      if (day.day_id === 7) {
        returnValue.day_id = "Sunday";
      }
      return returnValue
    })

    const hoursArr = newPlaceHours && newPlaceHours.length && newPlaceHours.map((item, index) =>
      <table className="place-hours-table" key={index}>
        <tbody>
          <tr className="place-hours-table-row">
            <th className="place-hours-table-column-left">{item.day_id}{': '}</th>
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