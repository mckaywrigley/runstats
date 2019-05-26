import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
