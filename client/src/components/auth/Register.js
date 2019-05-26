import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions";
import { withRouter } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      password: this.state.password
    };

    this.props.registerUser(user, this.props.history);
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <>
          <img
            src="https://res.cloudinary.com/dmdvv8dzx/image/upload/v1555644420/Illustration_register_cergkm.png"
            alt="signup background"
          />
          <form>
            <h2>Create a new account.</h2>
            <div>
              <input
                name="username"
                type="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.inputChange}
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.inputChange}
              />
            </div>
            <div>
              <input
                name="password2"
                type="password"
                placeholder="confirm password"
                value={this.state.password2}
                onChange={this.inputChange}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Sign Up
            </button>
          </form>
        </>
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
