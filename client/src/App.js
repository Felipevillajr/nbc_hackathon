import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
      </Router>
    );
  }
}
