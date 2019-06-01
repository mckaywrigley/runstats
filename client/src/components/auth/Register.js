import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { withRouter } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

import "./Register.scss";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: ""
    };
  }

  inputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    this.props.registerUser(user, this.props.history);
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <Form className="registerForm">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder=""
              onChange={this.inputChange}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder=""
              onChange={this.inputChange}
              value={this.state.username}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=""
              onChange={this.inputChange}
              value={this.state.password}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password2">Confirm Password</Label>
            <Input
              type="password"
              name="password2"
              id="password2"
              placeholder=""
              onChange={this.inputChange}
              value={this.state.password2}
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
