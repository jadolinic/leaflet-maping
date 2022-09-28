import './App.css';
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const location = [45.81603160595946, 15.978447002284671];
const zoom = 13;


function App() {

  const mapRef = useRef();

 useEffect( () => {
  console.log(mapRef);

 }, [mapRef])

  return (
    <div className="App">
      <MapContainer ref={mapRef} center={location} zoom={zoom} scrollWheelZoom={true}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={location} >
            <Popup>
              Little things
            </Popup>
          </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
