import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./style.css";

export const Compass = () => {
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [orientation, setOrientation] = useState(null);
  const [error, setError] = useState(null);

  // Get the user's current position
  const getPosition = (position) => {
    setPosition({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };


  // Handle errors when getting the user's position
  const handleError = (error) => {
    console.log('Geolocation error code:', error.code);
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


  // Check the Geolocation permission status
  navigator.permissions.query({ name: 'geolocation' })
    .then((permissionStatus) => {
      console.log('Geolocation permission state is ', permissionStatus.state);


      // Listen for changes to the permission state
      permissionStatus.onchange = () => {
        console.log('Geolocation permission state has changed to ', permissionStatus.state);
      };
    });

  // Handle device orientation changes
  const handleOrientation = (event) => {
    setOrientation(event.alpha);
  };
  
  // Get the user's current position and listen for device orientation changes
  useEffect(() => {

    // Error checking: Check for support for Geolocation API
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
            <div className="map">
              <div className="overlap-group">
                <div className="text-wrapper">Map</div>
                <Link to={"/map"}>
                  <img className="map-icon" alt="Map icon" src="/img/map-icon.png"/>
                </Link>
              </div>
            </div>
            <div className="div">
            <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <Link to={"/compass"}>
                    <img className="img" alt="Compass" src="/img/compass.png"/>
                  </Link>
                  <div className="text-wrapper-2">Compass</div>
                </div>
              </div>
              <div className="shade" />
            </div>
            <div className="home">
                <Link to={"/"}>
                    <img className="home-icon" alt="Home icon" src="/img/home-icon.png"/>
                </Link>
              <div className="text-wrapper-3">Home</div>
            </div>
          </div>
          <Link to={"/"}>
            <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png"/>
          </Link>
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
