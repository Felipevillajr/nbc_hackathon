import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Editors from "./Components/Editors";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        {/* <Switch>
          <Route exact path="/" component="Editors" />
        </Switch> */}
      </Router>
    );
  }
}
