import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";

class Navbar extends Component {
  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <div>
          <h2>Navbar</h2>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      );
    }
    return (
      <div>
        <h2>Navbar</h2>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/addRun">Add Run</NavLink>
        <button onClick={e => this.props.logoutUser()}>Logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
