// will need to use npm install react-router-dom for live location to work and use npm install leaflet react-leaflet for the map to work
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { NavLink } from 'react-router-dom';
import "./style.css";

// Define a custom marker icon using Leaflet's icon functionality
const markerIcon = new L.Icon({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// LocationMarker component to track and display user's current location on the map
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap(); // Access the Leaflet map instance

  useEffect(() => {
    // Attempt to obtain the user's current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition([latitude, longitude]); // Set the marker position
        map.flyTo([latitude, longitude], map.getZoom()); // Center the map on the user's location
      },
      () => {
        console.log('Location access denied by user.'); // Handle case where location access is denied
      }
    );
  }, [map]);

  // Only render the Marker if a position has been set
  return position === null ? null : (
    <Marker position={position} icon={markerIcon}></Marker>
  );
}

// Map component to render the map page with navigation and the user's location
export const Map = () => {
  const defaultPosition = [51.505, -0.09]; // Default position set to London

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
        <LocationMarker /> {/* Add the user's location marker to the map */}
      </MapContainer>
      <div className="navbar">
        {/* Navigation links to switch between pages */}
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

