import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Compass = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [orientation, setOrientation] = useState(null);
  const [error, setError] = useState(null);

  const getPosition = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };

  const handleError = (error) => {
    // Permission denied
    if (error.code === 1) {
      setError("User denied the request for Geolocation.");
    } else if (error.code === 2) {
      setError("Location information is unavailable.");
    } else if (error.code === 3) {
      setError("The request to get user location timed out.");
    } else {
      setError("An unknown error occurred.");
    }
  };

  const handleOrientation = (event) => {
    alert(event.alpha);
    setOrientation(event.alpha);
  };
  

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition, handleError);
    } else {
      setError("Geolocation is not supported by this browser.");
    }

    // Check for support for DeviceOrientation event
    if (window.DeviceOrientationEvent) {
      window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
      setError("Device orientation is not supported by this browser.");
    }

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  // Style to rotate the compass rose image according to the orientation
  const compassStyle = {
    transform: "translate(-50%, -50%) rotate(${orientation}deg)",
    transition: 'transform 0.1s linear' // Smooth transition for rotation
  };

  return (
    <div className="compass">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-image" alt="Background image" src="/img/background-image.png" />
          <div className="navbar">
            <Link to="/map">
              <div className="map">
                <div className="overlap-group">
                  <div className="text-wrapper">Map</div>
                  <img className="map-icon" alt="Map icon" src="/img/map-icon.png" />
                </div>
              </div>
            </Link>
            <Link to="/compass">
              <div className="div">
                <div className="overlap-group-wrapper">
                  <div className="overlap-2">
                    <img className="img" alt="Compass" src="/img/compass.png" />
                    <div className="text-wrapper-2">Compass</div>
                  </div>
                </div>
                <div className="shade" />
              </div>
            </Link>
            <Link to="/">
              <div className="home">
                <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
                <div className="text-wrapper-3">Home</div>
              </div>
            </Link>
          </div>
          <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
          <img
            className="image"
            alt="Compass Rose"
            src="/img/compassrose.png"
            style={orientation !== null ? compassStyle : {}}
          />
        </div>
      </div>
    </div>
  );
};
