import React, { Component } from "react";

import RunList from "./RunList";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <RunList />
      </div>
    );
  }
}

export default Dashboard;
