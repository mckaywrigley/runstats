import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

class Map extends Component {
  constructor() {
    super();
    this.state = {
      runmarkers: [
        { lat: 33.263314, lng: -111.711651, id: 1 },
        { lat: 33.190221, lng: -111.658252, id: 2 },
        { lat: 33.290884, lng: -111.722519, id: 3 },
        { lat: 33.260292, lng: -111.71993, id: 4 },
        { lat: 33.24873, lng: -111.713789, id: 5 },
        { lat: 33.178693, lng: -111.661258, id: 6 },
        { lat: 33.182475, lng: -111.653546, id: 7 }
      ]
    };
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.state.runmarkers.map(runmarker => {
          return (
            <Marker
              key={runmarker.id}
              position={{ lat: runmarker.lat, lng: runmarker.lng }}
            />
          );
        })}
      </GoogleMap>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));
