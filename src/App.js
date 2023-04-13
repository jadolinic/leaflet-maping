import { Component } from 'react';
import React from 'react';
import Header from './components/header/header.component.jsx';
import Map from './components/map/map.component.jsx';
import Table from './components/table/table.component.jsx';
import 'leaflet/dist/leaflet.css';
import './App.css'


class App extends Component {

  render () {
    return (
      <div className='App'>
        <Header />
        <Map />
      </div>
    );
  }
   
}

  export default App;