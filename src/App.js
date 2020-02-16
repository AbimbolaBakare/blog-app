import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Signup from "./components/auth/SignUp";
import Signin from "./components/auth/Sigin";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
