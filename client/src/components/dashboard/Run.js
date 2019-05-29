import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteRun, getRun } from "../../actions";

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
        <Link to={"/editrun"}>
          <button
            onClick={e => localStorage.setItem("currentRunID", this.props.id)}
          >
            Edit
          </button>
        </Link>
        <button onClick={e => this.props.deleteRun(this.props.id)}>
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  run: state.run
});

export default connect(
  mapStateToProps,
  { deleteRun, getRun }
)(Run);
