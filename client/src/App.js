import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions";

import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <h1>Runstats</h1>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Router>
      </>
    );
  }
}

export default App;
