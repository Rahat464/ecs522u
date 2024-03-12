import React from "react";
import "./style.css";

export const Map = () => {
  return (
    <div className="map">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="heatmap-layer" alt="Heatmap layer" src="/img/heatmap-layer.png" />
            </div>
          </div>
          <div className="search">
            <input className="input" placeholder="Search" type="text" />
          </div>
        </div>
        <div className="navbar">
          <div className="overlap-2">
            <div className="div-wrapper">
              <div className="overlap-group-2">
                <div className="text-wrapper">Map</div>
                <img className="map-icon" alt="Map icon" src="/img/map-icon.png" />
              </div>
            </div>
            <div className="shade" />
          </div>
          <div className="compass">
            <div className="overlap-3">
              <img className="img" alt="Compass" src="/img/compass.png" />
              <div className="text-wrapper-2">Compass</div>
            </div>
          </div>
          <div className="home">
            <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
            <div className="text-wrapper-3">Home</div>
          </div>
        </div>
        <img className="back-button-icon" alt="Back button icon" src="/img/back-button-icon.png" />
      </div>
    </div>
  );
};
