import React, { Component } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions";
import { withRouter } from "react-router-dom";

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
        <>
          <form>
            <h2>Welcome back!</h2>
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
                placeholder="Password"
                value={this.state.password}
                onChange={this.inputChange}
              />
            </div>
            <button type="submit" onClick={this.handleSubmit}>
              Login
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
  { loginUser }
)(withRouter(Login));
