import React, { Component } from "react";

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
    const reminder = {};
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

export default RunBuddy;
