import React, { Component } from "react";
import { connect } from "react-redux";
import { createReminder } from "../../actions";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class RunBuddy extends Component {
  state = {
    userNumber: "",
    friendNumber: ""
  };

  inputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    const reminder = {
      reminderName: "Initial Reminder",
      userPhoneNumber: this.state.userNumber,
      buddyPhoneNumber: this.state.friendNumber,
      timeZone: "UTC",
      time: Date.now(),
      user_id: this.props.auth.user.subject,
      message: "Testing!"
    };
    console.log(reminder);
    this.props.createReminder(reminder);
  };

  render() {
    return (
      <Form className="addRunForm">
        <h2>Run Buddy</h2>
        <FormGroup>
          <Label for="userNumber">Your Phone Number</Label>
          <Input
            type="text"
            name="userNumber"
            id="userNumber"
            placeholder="5556341228"
            onChange={this.inputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="friendNumber">Run Buddy's Phone Number</Label>
          <Input
            type="text"
            name="friendNumber"
            id="friendNumber"
            placeholder="5552176499"
            onChange={this.inputChange}
          />
        </FormGroup>
        <Button onClick={this.submit}>Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createReminder }
)(RunBuddy);
