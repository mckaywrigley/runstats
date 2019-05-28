import React, { Component } from "react";
import { connect } from "react-redux";
import { addRun, setCurrentUser } from "../../actions";

class AddRun extends Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem("userID"),
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

  componentDidMount() {
    this.props.setCurrentUser();
  }

  formatDuration = (hr, min, sec) => {
    const hms = `${hr}:${min}:${sec}`;
    const a = hms.split(":"); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    const seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];

    this.setState({
      secondDuration: seconds,
      stringDuration: hms
    });
  };

  submit = e => {
    e.preventDefault();
    this.formatDuration(
      this.state.hours,
      this.state.minutes,
      this.state.seconds
    );
    const run = {
      user: this.state.user,
      distance: this.state.distance,
      secondDuration: this.state.secondDuration,
      stringDuration: this.state.stringDuration,
      date: this.state.date,
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

  render() {
    return (
      <div>
        <h2>Add Run</h2>
        <form action="">
          <input
            type="number"
            name="distance"
            placeholder="distance"
            value={this.state.distance}
            onChange={this.inputChange}
          />
          <input
            type="number"
            name="hours"
            placeholder="hours"
            value={this.state.hours}
            onChange={this.inputChange}
            min="0"
            max="24"
          />
          <input
            type="number"
            name="minutes"
            placeholder="minutes"
            value={this.state.minutes}
            onChange={this.inputChange}
            min="0"
            max="59"
          />
          <input
            type="number"
            name="seconds"
            placeholder="seconds"
            value={this.state.seconds}
            onChange={this.inputChange}
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
