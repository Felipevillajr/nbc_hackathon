import React, { Component } from "react";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projectsText">
          <h1 className="projectsTextH">PROJECTS</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th># OF HOURS WORKED ON</th>
              <th># of EDITORS ON PROJECT</th>
            </tr>
          </thead>
          <tbody>
            <tr>Editor Name</tr>
            <tr>Editor Name</tr>
            <tr>Editor Name</tr>
          </tbody>
        </table>
      </div>
    );
  }
}
