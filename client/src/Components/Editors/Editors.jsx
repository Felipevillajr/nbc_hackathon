import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "./Editors.scss";

export default class Editors extends Component {
  render() {
    return (
      <div class="editors">
        <div class="editorsText">
          <h1 class="editorsTextH">EDITORS</h1>
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
            <tr>
              <td>Padilla, Carlos</td>
              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr>
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapse1"
              aria-controls="multiCollapseExample1"
            >
              <td>Padilla, Carlos</td>

              <td>270</td>

              <td>8</td>
            </tr>
            <div class="collapse multi-collapse1" id="multiCollapseExample1">
              <div>Child col 1</div>
              <div>Child col 2</div>
              <div>Child col 3</div>
            </div>
          </tbody>
        </Table>
      </div>
    );
  }
}
