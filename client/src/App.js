import React, { Component } from "react";

// React Router
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import AddRun from "./components/run/AddRun";
import EditRun from "./components/run/EditRun";
import Dashboard from "./components/dashboard/Dashboard";
import NavbarComponent from "./components/layout/Navbar";
// import Footer from "./components/layout/Footer";
import Plans from "./components/plans/Plans";
import RunBuddy from "./components/twilio/RunBuddy";

// Styling
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <NavbarComponent />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/addrun" component={AddRun} />
          <Route exact path="/editrun" component={EditRun} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/plans" component={Plans} />
          <Route exact path="/runBuddy" component={RunBuddy} />
          {/* <Footer /> */}
        </Router>
      </>
    );
  }
}

export default App;
