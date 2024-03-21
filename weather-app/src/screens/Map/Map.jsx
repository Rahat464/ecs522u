// will need to use npm install react-router-dom for live location to work and use npm install leaflet react-leaflet for the map to work
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { NavLink } from 'react-router-dom';
import "./style.css";

const markerIcon = new L.Icon({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]);
        map.flyTo([latitude, longitude], map.getZoom());
      },
      () => {
        console.log('Location access denied by user.');
      }
    );
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}></Marker>
  );
}

export const Map = () => {
  const defaultPosition = [51.505, -0.09];

  return (
    <div className="map-page">
      <NavLink to="/" className="back-button">
        <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
      </NavLink>
      <MapContainer center={defaultPosition} zoom={13} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
      <div className="navbar">
        <NavLink to="/" className="navbar-item" exact activeClassName="active">
          <img className="icon" alt="Home icon" src="/img/home-icon.png" />
          <div className="label">Home</div>
        </NavLink>
        <NavLink to="/map" className="navbar-item" activeClassName="active">
          <img className="icon" src="/img/map-icon.png" alt="Map icon" />
          <div className="label">Map</div>
        </NavLink>
        <NavLink to="/compass" className="navbar-item" exact activeClassName="active">
          <img className="icon" alt="Compass" src="/img/compass.png" />
          <div className="label">Compass</div>
        </NavLink>
      </div>
    </div>
  );
};
