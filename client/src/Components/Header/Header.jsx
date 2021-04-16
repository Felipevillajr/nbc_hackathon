import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchImg from "../../Assets/Icon-search.svg";
import "../Header/Header.scss";
import Logo from "../../Assets/T Logo 6.png";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" alt="telemundo" src={Logo} />
        <h1 className="header__main__title">
          TELEMUNDO CENTER Post-Production COE
        </h1>
        <h2 className="header__second__title">EDITOR HOUR DASHBOARD</h2>
        <div className="header__searchbar">
          <div className="header__searchbar__left">
            <select className="dropdown">
              <option>AUGUST 2020</option>
            </select>
            <div className="header__searchbar__lables1">
              <div className="header__searchbar__lable1">EDITORS</div>
              <div className="header__searchbar__lable2">71</div>
            </div>
            <div className="header__searchbar__lables2">
              <div className="header__searchbar__lable1">TOTAL HOURS</div>
              <div className="header__searchbar__lable2">11514.5</div>
            </div>
            {/* <div className="header__searchbar__lables3">
              <div className="header__searchbar__lable1">PROJECTS</div>
              <div className="header__searchbar__lable2">37</div>
            </div> */}
            <div className="header__searchbar__lables4">
              {/* <div className="header__searchbar__lable1">AVG HRS PER WEEK</div>
              <div className="header__searchbar__lable2">
                64 HRS - 4/11-4/17
              </div> */}
              <label
                htmlFor="averagehours"
                className="header__searchbar__lable1"
              >
                AVG HRS PER WEEK
              </label>
              <select value="AVG HRS PER WEEK" className="dropdown2">
                <option name="averagehours" className="dropdown2__options">
                  64 HRS - 4/11-4/17
                </option>
              </select>
            </div>
          </div>

          <div className="header__searchbar__right">
            <img
              className="header__search__right__icon"
              alt="search icon"
              src={SearchImg}
            />
            <input
              className="header__search__right__bar"
              type="text"
              name="search"
              placeholder="search"
            />
          </div>
        </div>
      </div>
    );
  }
}
