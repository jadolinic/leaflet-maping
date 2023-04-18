import React, { Component } from "react";
import "./navbar.style.css";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
        <ul className="main-nav">
          <li className="leaflet">
            <h1>Leaflet-React</h1>
          </li>
          <li>
            <NavLink className="a" to="/jadolinic/leaflet-maping">
              <h2>Map</h2>
            </NavLink>
          </li>
          <li>
            <NavLink className="a" to="/jadolinic/leaflet-maping/table">
              <h2>Table</h2>
            </NavLink>
          </li>
        </ul>
    );
  }
}

export default Navbar;
