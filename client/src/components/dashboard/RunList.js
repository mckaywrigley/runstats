import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserRuns } from "../../actions";

import Run from "./Run";

class RunList extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getUserRuns(this.props.auth.user.subject);
  }

  render() {
    if (this.props.run.runs.length === 0) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
    return (
      <div>
        <h2>Run List</h2>
        {this.props.run.runs.map(run => {
          return (
            <Run
              key={run._id}
              distance={run.distance}
              duration={run.stringDuration}
              date={run.date}
              location={run.location}
              description={run.description}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  run: state.run,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getUserRuns }
)(RunList);
