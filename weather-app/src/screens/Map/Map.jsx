// will need to use npm install react-router-dom for live location to work and use npm install leaflet react-leaflet for the map to work
// Importing necessary modules from React, react-leaflet, Leaflet, and react-router-dom.
// The react-leaflet library integrates Leaflet with React, allowing for the creation of interactive maps.
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS for default map styling.
import L from 'leaflet'; // L is the standard symbol used for Leaflet's API.
import { NavLink } from 'react-router-dom'; // NavLink is used for navigation with active styles.
import "./style.css"; // Importing custom CSS for styling the map and components.

// Custom marker icon configuration to enhance the default Leaflet marker appearance.
const markerIcon = new L.Icon({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'), // High resolution icon for Retina displays.
  iconUrl: require('leaflet/dist/images/marker-icon.png'), // Standard resolution icon for non-Retina displays.
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'), // Shadow image for the marker icon.
});

// This component is responsible for obtaining the user's current geographical location and displaying it on the map.
function LocationMarker() {
  const [position, setPosition] = useState(null); // State to hold the user's current position.
  const map = useMap(); // Hook to access the Leaflet map instance.

  useEffect(() => {
    // Use the Web Geolocation API to get the current position of the device.
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords; // Destructure latitude and longitude from position.coords.
        setPosition([latitude, longitude]); // Update state with the new position.
        map.flyTo([latitude, longitude], map.getZoom()); // Center the map on the new position without changing the zoom level.
      },
      () => {
        console.log('Location access denied by user.'); // Callback for handling cases where location access is denied.
      }
    );
  }, [map]); // The effect depends on the map instance, re-run if the map instance changes.

  // Render a Marker component if a position is available, otherwise render nothing.
  return position === null ? null : (
    <Marker position={position} icon={markerIcon}></Marker> // Custom marker icon is used here.
  );
}

// The Map component renders the whole map page, including the map container and navigation.
export const Map = () => {
  const defaultPosition = [51.505, -0.09]; // Sets a default position (London) for the map's initial view.

  return (
    <div className="map-page">
      <NavLink to="/" className="back-button">
        <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
      </NavLink>
      <MapContainer center={defaultPosition} zoom={13} className="leaflet-map">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Specifies the URL template for loading tiles.
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker /> {/* This component displays the user's location on the map. */}
      </MapContainer>
      <div className="navbar">
        {/* Navigation links with active styling for the current route. */}
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


