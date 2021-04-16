import React, { Component } from "react";
import "./Projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projectsText">
          <h1 className="projectsTextH">PROJECTS</h1>
        </div>
        <table className="projectsTable">
          <thead>
            <tr>
              <th className="projectsTableH">NAME</th>
              <th># OF HOURS WORKED ON</th>
              <th># of EDITORS ON PROJECT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Editor Name</td>
              <td>total hours</td>
              <td>ex: 10</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
