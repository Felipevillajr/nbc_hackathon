import React, { Component } from "react";
import "./Editors.scss";

export default class Editors extends Component {
  render() {
    return (
      <div class="editors">
        <div class="editorsText">
          <h1 class="editorsTextH">EDITORS</h1>
        </div>

        <table class="editorsTable">
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
          </tbody>
        </table>
      </div>
    );
  }
}
