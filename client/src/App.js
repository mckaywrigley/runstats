import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddRun from "./components/run/AddRun";
import EditRun from "./components/run/EditRun";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <h1>Runstats</h1>
          <Navbar />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addrun" component={AddRun} />
          <Route exact path="/editrun" component={EditRun} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
