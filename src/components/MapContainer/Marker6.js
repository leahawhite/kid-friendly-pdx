import React from "react";
import { Marker } from "react-google-maps";
import InfoWindow from './InfoWindow';

export default class Marker6 extends React.Component {

  state = {
    isOpen: false,
    onToggleOpen: ({ isOpen }) => ({
      isOpen: !isOpen,
    })
  }

  
  render(){

    return(
        <Marker
          position={this.props.location}
          onClick={this.props.onToggleOpen}
          
        >
          {this.props.isOpen && <InfoWindow place={this.props.place} onCloseClick={this.props.onToggleOpen} />}
        </Marker>
    );
  }
}