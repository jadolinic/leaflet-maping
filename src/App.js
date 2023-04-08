import { Component } from 'react';
import React from 'react';
import { MapContainer, TileLayer, GeoJSON, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'
import L, { DivIcon, point, } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import lokacije from './objekti.json';



class App extends Component {
  state = {};

  componentDidMount() {
  }
  
  onEachLocation = (location, layer) => {
    const nazivObjekta = location.properties.naziv_objekta;
    const psBroj = location.properties.ps_br;
    const eBroj = location.properties.e_br;
    const tipObjekta = location.properties.tip_objekta;
    const luckaKapetanija = location.properties.lucka_kapetanija;

    layer.bindPopup(`Naziv objekt: <strong>${nazivObjekta}</strong></br>` +
                    `PS Broj: <strong>${psBroj}</strong></br>` + 
                    `E broj: <strong>${eBroj}</strong></br>` + 
                    `Tip Objekta: <strong>${tipObjekta}</strong></br>` + 
                    `Lučka Kapetanija: <strong>${luckaKapetanija}</strong>` );

  }


  render () {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: require ('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require ('leaflet/dist/images/marker-shadow.png'),
      
      }); 

      
      const createCustomClusterIcon = (cluster) => {
          return new DivIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: "custom-marker-cluster",
            iconsSize: point(33, 33, true),
      })
      }


  
    return (
      <>
        
        <MapContainer center={[43.86117730178092, 16.75881960042836]} zoom={8} scrollWheelZoom={true} >
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
          />
          
          <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createCustomClusterIcon}>
            <GeoJSON 
              data={lokacije.features}
              onEachFeature={this.onEachLocation}
             />
          </MarkerClusterGroup>

        </MapContainer>
      </>
    );
  }
   
}

  export default App;