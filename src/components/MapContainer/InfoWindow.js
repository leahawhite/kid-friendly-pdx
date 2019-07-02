import React from "react";
import { InfoWindow } from "react-google-maps";

export default class InfoWindow extends React.Component {

  render(){
    return(
        <div>
          <h4>{this.props.place.name}</h4>
        </div>    );
  }
}