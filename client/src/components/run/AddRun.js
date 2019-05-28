import React, { Component } from "react";
import { connect } from "react-redux";
import { addRun, setCurrentUser } from "../../actions";

import moment from "moment";

class AddRun extends Component {
  constructor() {
    super();
    this.state = {
      distance: "",
      hours: "",
      minutes: "",
      seconds: "",
      secondDuration: "",
      stringDuration: "",
      date: "",
      location: "",
      description: ""
    };
  }

  formatDuration = (hr, min, sec) => {
    const hms = `${hr}hr ${min}min ${sec}sec`;
    const arr = `${hr}:${min}:${sec}`;
    const a = arr.split(":"); // split it at the colons
    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
    this.setState({
      secondDuration: seconds,
      stringDuration: hms
    });
    console.log(this.state);
  };

  submit = e => {
    e.preventDefault();
    const run = {
      user: this.props.auth.user.subject,
      distance: Number(this.state.distance),
      secondDuration: Number(this.state.secondDuration),
      stringDuration: this.state.stringDuration,
      date: moment(this.state.date).format("MMMM Do YYYY"),
      location: this.state.location,
      description: this.state.description
    };
    this.props.addRun(run);
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  hmsChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    this.formatDuration(
      this.state.hours,
      this.state.minutes,
      this.state.seconds
    );
  };

  render() {
    return (
      <div>
        <h2>Add Run</h2>
        <form action="">
          <input
            type="number"
            name="distance"
            placeholder="distance in miles"
            value={this.state.distance}
            onChange={this.inputChange}
          />
          <input
            type="number"
            name="hours"
            placeholder="hours"
            value={this.state.hours}
            onChange={this.hmsChange}
            min="0"
            max="24"
          />
          <input
            type="number"
            name="minutes"
            placeholder="minutes"
            value={this.state.minutes}
            onChange={this.hmsChange}
            min="0"
            max="59"
          />
          <input
            type="number"
            name="seconds"
            placeholder="seconds"
            value={this.state.seconds}
            onChange={this.hmsChange}
            min="0"
            max="59"
          />
          <input
            type="date"
            name="date"
            placeholder="date"
            value={this.state.date}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={this.inputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.inputChange}
          />
          <button type="submit" onClick={this.submit}>
            Submit
          </button>
        </form>
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
  { addRun, setCurrentUser }
)(AddRun);
