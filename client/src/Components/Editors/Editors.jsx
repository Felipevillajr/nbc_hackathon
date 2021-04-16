import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "font-awesome/css/font-awesome.min.css";
import "./Editors.scss";

export default class Editors extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <div class="editors">
        <div class="editorsText">
          <h1 class="editorsTextH">EDITORS</h1>
          <div class="content">
            <div class="search">
              <input
                onChange={this.handleChange}
                type="text"
                class="search__input"
                aria-label="search"
                placeholder="Enter your search"
              />
              <button class="search__submit" aria-label="submit search">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </div>

        <Table class="editorsTable">
          <thead>
            <tr>
              <th className="editorsTableH">NAME</th>
              <th># TOTAL HOURS WORKED</th>
              <th># OF PROJECTS WORKED ON</th>
            </tr>
          </thead>
          <tbody>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse1"
              aria-controls="multiCollapseExample1"
            >
              <td>Padilla, Carlos</td>
              <td>270</td>
              <td>8</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse1" id="multiCollapseExample1">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse1" id="multiCollapseExample1">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse2"
              aria-controls="multiCollapseExample2"
            >
              <td>Padilla, Carlos</td>
              <td>270</td>
              <td>8</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse2" id="multiCollapseExample2">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse2" id="multiCollapseExample2">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse3"
              aria-controls="multiCollapseExample3"
            >
              <td>Padilla, Carlos</td>
              <td>370</td>
              <td>8</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse3" id="multiCollapseExample3">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse3" id="multiCollapseExample3">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
          </tbody>
        </Table>
      </div>
    );
  }
}
