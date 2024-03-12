import React from "react";
import "./style.css";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
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
            <div className="compass">
              <div className="div">
                <img className="img" alt="Compass" src="/img/compass.png" />
                <div className="text-wrapper-2">Compass</div>
              </div>
            </div>
            <div className="overlap-2">
              <div className="home">
                <img className="home-icon" alt="Home icon" src="/img/home-icon.png" />
                <div className="text-wrapper-3">Home</div>
              </div>
              <div className="shade" />
            </div>
          </div>
          <div className="more-forecasts">
            <div className="tuesday">
              <img className="cloudy" alt="Cloudy" src="/img/cloudy-1.png" />
              <div className="text-wrapper-4">Tuesday</div>
              <div className="view-more">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-5">VIEW MORE</div>
                </div>
              </div>
            </div>
            <div className="wednesday">
              <img className="cloudy" alt="Cloudy" src="/img/cloudy-1.png" />
              <div className="text-wrapper-6">Wednesday</div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-5">VIEW MORE</div>
                </div>
              </div>
            </div>
            <div className="thursday">
              <img className="cloudy" alt="Cloudy" src="/img/cloudy-1.png" />
              <div className="text-wrapper-7">Thursday</div>
              <div className="div-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-5">VIEW MORE</div>
                </div>
              </div>
            </div>
            <div className="monday">
              <img className="cloudy" alt="Cloudy" src="/img/cloudy-1.png" />
              <div className="text-wrapper-8">Monday</div>
              <div className="view-more-2">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="text-wrapper-5">VIEW MORE</div>
                </div>
              </div>
            </div>
          </div>
          <div className="today-s-weather">
            <div className="view-more-3">
              <div className="overlap-group-2">
                <div className="rectangle" />
                <div className="text-wrapper-5">VIEW MORE</div>
              </div>
            </div>
            <div className="weather-info">
              <div className="windspeed">
                <img className="img-2" alt="Windspeed icon" src="/img/windspeed-icon.png" />
                <div className="text-wrapper-9">32mph</div>
                <div className="text-wrapper-10">Windspeed</div>
              </div>
              <div className="wave-height">
                <img className="img-2" alt="Wave height icon" src="/img/wave-height-icon.png" />
                <div className="text-wrapper-11">3.1m</div>
                <div className="text-wrapper-12">Wave Height</div>
              </div>
              <div className="precipitation">
                <img className="img-2" alt="Precipitation icon" src="/img/precipitation-icon.png" />
                <div className="overlap-group-3">
                  <div className="text-wrapper-13">100%</div>
                  <div className="text-wrapper-14">Chance of Rain</div>
                </div>
              </div>
              <div className="wind-direction">
                <img className="img-2" alt="Wind direction icon" src="/img/wind-direction-icon.png" />
                <div className="text-wrapper-9">137°</div>
                <div className="text-wrapper-15">Wind Direction</div>
              </div>
              <div className="wave-direction">
                <div className="text-wrapper-16">Wave Direction</div>
                <img className="img-2" alt="Wave direction" src="/img/wave-direction.png" />
                <div className="text-wrapper-11">136°</div>
              </div>
              <div className="visibility">
                <div className="text-wrapper-11">3.2km</div>
                <div className="text-wrapper-17">Visibility</div>
                <img className="img-2" alt="Visibility icon" src="/img/visibility-icon.png" />
              </div>
            </div>
            <div className="title">
              <img className="storm-icon" alt="Storm icon" src="/img/storm-icon.png" />
              <div className="text-wrapper-18">Southend-on-Sea</div>
            </div>
          </div>
          <div className="warning-sign">
            <div className="overlap-3">
              <img className="warning-icon" alt="Warning icon" src="/img/warning-icon.png" />
              <p className="WARNING-heavy-rain">
                WARNING:
                <br />
                Heavy rain may result in some flooding and disruption. Avoid sailing.
              </p>
            </div>
          </div>
          <div className="search">
            <input className="input" placeholder="Search" type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};
