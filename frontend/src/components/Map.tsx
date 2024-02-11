import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'

type COPLocation = {
  lat: number;
  lng: number; 
  name: string;
  data: string;
};

type MapProps = {
  locations: COPLocation[];
};

const Map: React.FC<MapProps> = ({ locations }) => {
  return (
    <MapContainer center={[30.505, -10.5]} zoom={3} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lng]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}> 
          <Popup>
            {location.name}<br />
            {location.data}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
