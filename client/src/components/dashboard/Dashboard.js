import React, { Component } from "react";

import RunList from "./RunList";
import LineChart from "./LineChart";

import "./Dashboard.scss";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h2>Dashboard</h2>
        <LineChart />
        <RunList />
      </div>
    );
  }
}

export default Dashboard;
