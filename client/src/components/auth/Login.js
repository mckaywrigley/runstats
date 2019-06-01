import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { withRouter } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
      password: this.state.password
    };

    this.props.loginUser(user, this.props.history);
    this.props.history.push("/dashboard");
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <Form className="loginForm">
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
          <Button onClick={this.handleSubmit}>Submit</Button>
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
  { loginUser }
)(withRouter(Login));
