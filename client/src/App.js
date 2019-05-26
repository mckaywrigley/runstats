import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Auth
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions";

import "./App.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

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
