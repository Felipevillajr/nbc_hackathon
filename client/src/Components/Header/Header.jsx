import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <h1 className='header__main__title'>TELEMUNDO CENTER POST-PRODUCTIONS COE</h1>
        <h2 className='header__second__title'>EDITOR HOUR DASHBOARD</h2>
        <div className='header__search' >
          <select>
            <option>AUGUST 2020</option>
          </select>
          <p>EDITORS 71</p>
          <p>TOTAL HOURS 11514.5</p>
          <p>PROJECTS 37</p>
          <input type=text name=search placeholder='search'></input>
        </div>
      </div>
    );
  }
}
