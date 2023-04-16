import { Component } from "react";
import React from "react";
import Navbar from "./components/navbar/navbar.component.jsx";
import Map from "./components/map/map.component.jsx";
import Table from "./components/table/table.component.jsx";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </>
    );
  }
}

export default App;
