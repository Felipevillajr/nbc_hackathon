import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import "font-awesome/css/font-awesome.min.css";
import "./Editors.scss";
import axios from "axios";

export default class Editors extends Component {
  // state = {
  //   search: "",
  //   data: [],
  // };

  // componentDidMount() {
  //   axios
  //     .get("http://localhost:8080")
  //     .then((res) => {
  //       this.setState({ data: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    // this.state.data.find((employee) => {
    //   console.log(employee.Id);
    // });

    return (
      <div class="editors">
        <div class="editorsText">
          <h1 class="editorsTextH">EDITORS</h1>
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
              <th># TOTAL HOURS WORKED</th>
              <th># OF PROJECTS WORKED ON</th>
            </tr>
          </thead>
          <tbody className="tbodyClass">
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor1"
              aria-controls="multiCollapseExample1E"
            >
              <td>Padilla, Carlos</td>
              <td>270</td>
              <td>8</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor1"
                id="multiCollapseExample1E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor1"
                id="multiCollapseExample1E"
              >
                <td>Al Rojo</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor2"
              aria-controls="multiCollapseExample2E"
            >
              <td>Garcia, Maria</td>
              <td>181</td>
              <td>4</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor2"
                id="multiCollapseExample2E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor2"
                id="multiCollapseExample2E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor3"
              aria-controls="multiCollapseExample3E"
            >
              <td>Planchart, Luis</td>
              <td>246</td>
              <td>4</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor3"
                id="multiCollapseExample3E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor3"
                id="multiCollapseExample3E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor4"
              aria-controls="multiCollapseExample4E"
            >
              <td>Quintero, Nelida</td>
              <td>221</td>
              <td>3</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor4"
                id="multiCollapseExample4E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor4"
                id="multiCollapseExample4E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor5"
              aria-controls="multiCollapseExample5E"
            >
              <td>Morando, Jaime</td>
              <td>182</td>
              <td>3</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor5"
                id="multiCollapseExample5E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor5"
                id="multiCollapseExample5E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor6"
              aria-controls="multiCollapseExample6E"
            >
              <td>Cruz, Disney</td>
              <td>216</td>
              <td>1</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor6"
                id="multiCollapseExample6E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor6"
                id="multiCollapseExample6E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor7"
              aria-controls="multiCollapseExample7E"
            >
              <td>Albarran, Ellery</td>
              <td>212</td>
              <td>1</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor7"
                id="multiCollapseExample7E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor7"
                id="multiCollapseExample7E"
              >
                <td>Child col 1</td>
                <td>Child col 2</td>
              </tr>
            </div>
            <tr
              data-toggle="collapse"
              data-target=".multi-collapseEditor8"
              aria-controls="multiCollapseExample8E"
            >
              <td>Silva, Ari</td>
              <td>186</td>
              <td>1</td>
            </tr>
            <div className="newContT">
              <tr
                class="collapse multi-collapseEditor8"
                id="multiCollapseExample8E"
              >
                <th>PROJECTS</th>
                <th># OF HOURS WORKED ON</th>
              </tr>
              <tr
                class="collapse multi-collapseEditor8"
                id="multiCollapseExample8E"
              >
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
