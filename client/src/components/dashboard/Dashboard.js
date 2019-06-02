import React, { Component } from "react";

import RunList from "./RunList";
import LineChart from "./LineChart";
import Map from "../map/Map";

import "./Dashboard.scss";

const apiKey = process.env.REACT_APP_API_KEY;
const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lng: null
    };
  }

  componentDidMount() {
    this.getUserLocation();
  }

  getUserLocation = () => {
    const successFunction = position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert("Please enable Geolocation in the broswer to use this feature.");
    }
  };

  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <LineChart />
        <Map
          isMarkerShown={false}
          googleMapURL={googleMapURL}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <RunList />
      </div>
    );
  }
}

export default Dashboard;
