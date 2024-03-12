import React from "react";
import "./style.css";

export const Compass = () => {
  return (
    <div className="compass">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="background-image" alt="Background image" src="/img/background-image.png" />
          <div className="navbar">
            <div className="map">
              <div className="overlap-group">
                <div className="text-wrapper">Map</div>
                <img className="map-icon" alt="Map icon" src="/img/map-icon.png" />
              </div>
            </div>
            <div className="div">
              <div className="overlap-group-wrapper">
                <div className="overlap-2">
                  <img className="img" alt="Compass" src="/img/compass.png" />
                  <div className="text-wrapper-2">Compass</div>
                </div>
              </div>
              <div className="shade" />
            </div>
            <div className="home">
              <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
              <div className="text-wrapper-3">Home</div>
            </div>
          </div>
          <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
          <img className="image" alt="Image" src="/img/image-1.png" />
        </div>
      </div>
    </div>
  );
};
