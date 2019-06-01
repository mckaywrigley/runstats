import React, { Component } from "react";

import { Navbar, NavbarToggler, NavbarBrand } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Runstats</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
        </Navbar>
      </div>
    );
  }
}

export default Footer;
