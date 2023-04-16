import React, { Component } from "react";
import "./table.style.css";
import lokacije from "../map/objekti.json";

class Table extends Component {
  render() {

  return (
    <div className="container">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th scope="col">Naziv Objekta</th>
            <th scope="col">PS Broj</th>
            <th scope="col">E broj</th>
            <th scope="col">Tip Objekta</th>
            <th scope="col">Lučka kapetanija</th>
          </tr>
        </thead>
        <tbody>
          {lokacije.features.map((val) => (
            <tr>
              <td>{val.properties.naziv_objekta}</td>
              <td>{val.properties.ps_br}</td>
              <td>{val.properties.e_br}</td>
              <td>{val.properties.tip_objekta}</td>
              <td>{val.properties.lucka_kapetanija}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
}

export default Table;
