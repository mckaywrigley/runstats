import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import "./Navbar.scss";

class NavbarComponent extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    if (!this.props.auth.isAuthenticated) {
      return (
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Runstats</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="link" href="/plans">
                    Plans
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="link" href="/register">
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="link" href="/login">
                    Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Runstats</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavItem>
                  <NavLink className="link" href="/register">
                    Plans
                  </NavLink>
                </NavItem>
                <NavLink
                  className="link"
                  onClick={e => this.props.logoutUser()}
                >
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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
)(NavbarComponent);
