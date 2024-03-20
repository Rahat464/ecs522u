// will need to use npm install react-router-dom for live location to work and use npm install leaflet react-leaflet for the map to work
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Link } from 'react-router-dom';
import "./style.css";

// Configure the icon for the marker
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
        // Handle location access denied here
        console.log('Location access denied by user.');
        // You can set a default position or just do nothing
      }
    );
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={markerIcon}>
      {/* Add Popup here if you want */}
    </Marker>
  );
}

export const Map = () => {
  // Default center if user denies geolocation access
  const defaultPosition = [51.505, -0.09]; 

  return (
    <div className="map-page">
      <Link to="/" className="back-button">
        <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
      </Link>
      <MapContainer center={defaultPosition} zoom={13} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
      <div className="navbar">
        <Link to="/" className="navbar-item">
          <img className="icon home-icon" alt="Home icon" src="/img/home-icon.png" />
          <div className="label">Home</div>
        </Link>
        <Link to="/map" className="navbar-item">
          <img className="icon map-icon" alt="Map icon" src="/img/map-icon.png" />
          <div className="label">Map</div>
        </Link>
        <Link to="/compass" className="navbar-item">
          <img className="icon compass-icon" alt="Compass" src="/img/compass.png" />
          <div className="label">Compass</div>
        </Link>
      </div>
    </div>
  );
};
