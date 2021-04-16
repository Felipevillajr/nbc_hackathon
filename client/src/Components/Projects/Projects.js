import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "font-awesome/css/font-awesome.min.css";
import "../Editors/Editors.scss";

export default class Editors extends Component {
  // state = {
  //   search: "",
  // };

  // handleChange = (e) => {
  //   this.setState({ search: e.target.value });
  // };

  render() {
    return (
      <div class="editors">
        <div class="editorsText">
          <h1 class="editorsTextH">PROJECTS</h1>
          <div class="content">
            <div class="search">
              <input
                // onChange={this.handleChange}
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
              <th># TOTAL HOURS WORKED ON</th>
              <th># OF EDITORS ON PROJECT</th>
            </tr>
          </thead>
          <tbody>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse1"
              aria-controls="multiCollapseExample1"
            >
              <td>Al Rojo Vivo</td>
              <td>525</td>
              <td>5</td>
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
              <td>Network Partnership</td>
              <td>2.5</td>
              <td>1</td>
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
              <td>El Cuerpo Del Deseo</td>
              <td>5</td>
              <td>1</td>
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
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse4"
              aria-controls="multiCollapseExample4"
            >
              <td>El Chema</td>
              <td>8</td>
              <td>1</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse4" id="multiCollapseExample4">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse4" id="multiCollapseExample4">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse5"
              aria-controls="multiCollapseExample5"
            >
              <td>Tod Por Mi Hija</td>
              <td>45</td>
              <td>2</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse5" id="multiCollapseExample5">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse5" id="multiCollapseExample5">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse6"
              aria-controls="multiCollapseExample6"
            >
              <td>En Casa Con Telemundo</td>
              <td>491</td>
              <td>4</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse6" id="multiCollapseExample6">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse6" id="multiCollapseExample6">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse7"
              aria-controls="multiCollapseExample7"
            >
              <td>100 Dias 2</td>
              <td>414</td>
              <td>2</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse7" id="multiCollapseExample7">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse7" id="multiCollapseExample7">
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse8"
              aria-controls="multiCollapseExample8"
            >
              <td>La Casa Del Al Lado</td>
              <td>144</td>
              <td>1</td>
            </tr>
            <div className="newCont">
              <tr class="collapse multi-collapse8" id="multiCollapseExample8">
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr class="collapse multi-collapse8" id="multiCollapseExample8">
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
