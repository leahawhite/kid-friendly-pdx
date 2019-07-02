import React, {Component} from 'react';
import Gmap from './Gmap'

export default class MapContainer6 extends Component {

  render() {
		return (
			<Gmap
				places={this.props.places}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDsdDZ5P1zY_soUX1qBLCTrVuN7HENqhjs&libraries=places`}
				loadingElement={<div style={{ height: `600px` }} />}
				containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
			/>
		);
	}
}