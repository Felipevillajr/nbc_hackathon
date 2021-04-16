import React, { Component } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Editors from "./Components/Editors/Editors";
import Projects from "./Components/Projects/Projects";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
          <div className="AppCont">
            <Editors />
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}
