import React, { Component } from "react";

import "./Run.scss";

class Run extends Component {
  render() {
    return (
      <div className="run">
        <p>{this.props.distance}mi</p>
        <p>{this.props.duration}</p>
        <p>{this.props.date}</p>
        <p>{this.props.location}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Run;
