import React, { Component } from "react";
import { connect } from "react-redux";
import { addRun, setCurrentUser } from "../../actions";

import moment from "moment";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./AddRun.scss";

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
    this.setState({
      distance: "",
      hours: "",
      minutes: "",
      seconds: "",
      secondDuration: "",
      stringDuration: "",
      date: "",
      location: "",
      description: ""
    });
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
      <Form className="addRunForm">
        <h2>Add Run</h2>
        <FormGroup>
          <Label for="distance">Distance</Label>
          <Input
            type="number"
            name="distance"
            id="distance"
            placeholder="distance in miles"
            onChange={this.inputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hours">Hours</Label>
          <Input
            type="number"
            name="hours"
            id="hours"
            placeholder="hours"
            onChange={this.hmsChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="minutes">Minutes</Label>
          <Input
            type="number"
            name="minutes"
            id="minutes"
            placeholder="minutes"
            onChange={this.hmsChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="seconds">Seconds</Label>
          <Input
            type="number"
            name="seconds"
            id="seconds"
            placeholder="seconds"
            onChange={this.hmsChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="date">Date</Label>
          <Input
            type="date"
            name="date"
            id="date"
            placeholder=""
            onChange={this.inputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            type="text"
            name="location"
            id="location"
            placeholder="location"
            onChange={this.inputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            id="description"
            placeholder="description"
            onChange={this.inputChange}
          />
        </FormGroup>
        <Button onClick={this.submit}>Submit</Button>
      </Form>
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
